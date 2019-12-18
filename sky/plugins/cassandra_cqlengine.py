import re
import datetime
from cassandra.cqlengine import connection
from cassandra.cqlengine.models import Model, BaseModel
from cassandra.cqlengine.usertype import UserType
from cassandra.cqlengine import connection, columns
from cassandra.cqlengine.management import _get_create_table
from cassandra.cqlengine.query import ModelQuerySet
from .. import module as md

hooks__after_get_public_dict = []

def get_public_dict(self, *args, **kwargs):
    """convert model to dict without hidden fields"""
    r = {}
    for key, value in self.items():
        r[key] = value
        if hasattr(value, 'get_public_dict'):
            r[key] = value.get_public_dict()
        elif isinstance(value, list):
            r[key] = list(map(lambda v: v.get_public_dict() if hasattr(v, 'get_public_dict') else v, value))
    if isinstance(self, Model):
        for func in hooks__after_get_public_dict:
            r = func(self, r, *args, **kwargs)
        if r:
            if getattr(self, 'after_get_public_dict', None):
                self.after_get_public_dict(r, *args, **kwargs)
        else:
            if getattr(self, 'after_get_none_public_dict', None):
                r = self.after_get_none_public_dict(*args, **kwargs)
    return r

setattr(Model, 'get_public_dict', get_public_dict)
setattr(UserType, 'get_public_dict', get_public_dict)

def get_dict(self, *args, **kwargs):
    """convert model to dict without hidden fields"""
    r = {}
    for key, value in self.items():
        r[key] = value
        if hasattr(value, 'get_dict'):
            r[key] = value.get_dict()
        elif isinstance(value, list):
            r[key] = list(map(lambda v: v.get_dict() if hasattr(v, 'get_dict') else v, value))
    return r

setattr(Model, 'get_dict', get_dict)
setattr(UserType, 'get_dict', get_dict)

def _diff_files(files1, files2):
    """ files1(list) - files2(list) """
    map = {}
    for path in files2:
        map[path] = map.get(path, 0) + 1
    result = []
    for path in files1:
        if path in map:
            map[path] -= 1
        if map.get(path, -1) < 0:
            result.append(path)
    return result

def _get_files(item):
    """ get files url from item.file_fields """
    file_fields = getattr(item, 'file_fields', None)
    r = []
    if file_fields:
        t = md.resolve_obj_by_paths(item, file_fields)
        for v in t:
            if 'value' in v:
                value = v['value']
                if isinstance(value, list):
                    for v2 in value:
                        if v2:
                            r.append(v2)
                elif value:
                    r.append(value)
    return r

# override Model.update, Model.delete ============================
# Model.create will call ModelQuerySet.create, so just override ModelQuerySet.create
def make_nested_dict_savable(model, data):
    """convert usertype column to UserType instance
    don't support List(List())
    """
    def recurse_dict(obj, cls):
        for key, value in obj.items():
            if isinstance(value, dict):
                column = getattr(cls, key).column
                if isinstance(column, columns.UserDefinedType):
                    obj[key] = recurse_dict(value, column.user_type)
            elif isinstance(value, list):
                new_list = []
                column = getattr(cls, key)
                for item_value in value:
                    if isinstance(column.column.types[0], columns.UserDefinedType):
                        item_cls = column.column.types[0].user_type
                        new_list.append(recurse_dict(item_value, item_cls))
                    else:
                        new_list.append(item_value)
                obj[key] = new_list
        if issubclass(cls, UserType):
            return cls(**obj)
    recurse_dict(data, model)

@md.override_instance_method(Model, name='update')
def Model_update(self, old_method, _disabled_hooks=[], **kwargs):
    if hasattr(self, 'updated_at') and 'updated_at' not in kwargs:
        import datetime
        kwargs['updated_at'] = datetime.datetime.utcnow()
    if hasattr(self, 'before_update') and 'before_update' not in _disabled_hooks:
        self.before_update(kwargs)
    if hasattr(self, 'before_save') and 'before_save' not in _disabled_hooks:
        self.before_save(kwargs)
    make_nested_dict_savable(type(self), kwargs)
    if hasattr(self, 'file_fields'):
        old_files = _get_files(self)
    item = old_method(**kwargs)
    if hasattr(item, 'file_fields'):
        from ..models import File
        new_files = _get_files(self)
        removed = _diff_files(old_files, new_files)
        added = _diff_files(new_files, old_files)
        if len(removed) > 0:
            File.reduce_reference(removed)
        if len(added) > 0:
            File.add_reference(added)
    if hasattr(item, 'after_update') and 'after_update' not in _disabled_hooks:
        item.after_update()
    if hasattr(item, 'after_save') and 'after_save' not in _disabled_hooks:
        item.after_save()
    return item

# Soft deleted_at
@md.override_instance_method(Model, name='delete')
def Model_delete(self, old_method, force = False, *args, **kwargs):
    #
    if force:
        if hasattr(self, 'file_fields'):
            from ..models import File
            files = _get_files(self)
            File.reduce_reference(files)
        return old_method(*args, **kwargs)
    #
    if hasattr(self, 'before_delete'):
        self.before_delete()
    result = None
    if hasattr(self,'deleted_at'):
        if not self.deleted_at:
            self.deleted_at = datetime.datetime.utcnow()
            self.save()
        else:
            raise Exception('The record has been already soft deleted.')
    else:
        result = old_method(*args, **kwargs)
        if hasattr(self, 'file_fields'):
            from ..models import File
            files = _get_files(self)
            File.reduce_reference(files)
    if hasattr(self, 'after_delete'):
        self.after_delete()
    return result

# restore deleted_at = None
@md.add_instance_method(Model, name='restore')
def Model_restore(self, *args, **kwargs):
    if hasattr(self, 'before_restore'):
        self.before_restore()
    self.deleted_at = None
    self.save()
    if hasattr(self, 'after_restore'):
        self.after_restore()

# override Model.update, Model.delete  end ============================

# override ModelQuerySet.create, ModelQuerySet.delete ============================
@md.override_instance_method(ModelQuerySet, name='create')
def ModelQuerySet_create(self, old_method, **kwargs):
    model = self.model
    if hasattr(model, 'before_create'):
        model.before_create(model, kwargs)
    if hasattr(model, 'before_save'):
        model.before_save(model, kwargs)
    make_nested_dict_savable(model, kwargs)
    item = old_method(**kwargs)
    if hasattr(item, 'file_fields'):
        from ..models import File
        files = _get_files(item)
        File.add_reference(files)
    if hasattr(item, 'after_create'):
        item.after_create()
    if hasattr(item, 'after_save'):
        item.after_save()
    return item
# deprecated
# @md.override_instance_method(ModelQuerySet, name='delete')
# def ModelQuerySet_delete(self, old_method, **kwargs):
#     model = self.model
#     if hasattr(model, 'before_delete'):
#         for item in self:
#             item.before_delete()
#     result = old_method(*args, **kwargs)
#     if hasattr(model, 'file_fields'):
#         from ..models import File
#         all_files = []
#         for item in self:
#             files = _get_files(item)
#             all_files += files
#         File.reduce_reference(all_files)
#     if hasattr(model, 'after_delete'):
#         for item in self:
#             item.after_delete()
#     return result
# override ModelQuerySet.create, ModelQuerySet.delete end ============================

def create_materialized_view(model):
    """materialized_view must has base_model. Must with all base_model primary keys as primary key."""
    table_cql = _get_create_table(model)
    """
    cql example:
    CREATE TABLE rolltrek.course2 ("course_id" uuid , "user_id" uuid , "created_at" timestamp , PRIMARY KEY (("course_id"), "user_id")) WITH CLUSTERING ORDER BY ("user_id" ASC)
    """
    m=re.match(r'CREATE TABLE (\S+) \((.*?)(PRIMARY KEY.*$)', table_cql)
    name = m[1]
    end = m[3].replace(')) WITH CLUSTERING', ') WITH CLUSTERING')
    # resolve columnNames
    t = m[2]
    columnNames = [] # maybe wrapped with quota
    for t2 in t.split(','):
        t2 = t2.strip()
        if t2:
            columnNames.append(t2.split(' ')[0])
    # join cql
    select_part = ', '.join(columnNames)
    where_part = ' AND '.join(['%s IS NOT NULL'%(name) for name in columnNames])
    base_table_name = model.base_model.column_family_name()
    cql = """
CREATE MATERIALIZED VIEW %s AS
SELECT %s FROM %s WHERE %s
%s;
    """%(name, select_part, base_table_name, where_part, end)
    connection.execute(cql)
