import copy
from flask import current_app as app
from cassandra.cqlengine.models import Model
from . import cassandra_cqlengine
from .. import module as md
from .. import current_user, import_string

view_model_name_by_model_name = {}
def get_view_model_name_by_model(model):
    # model is model instance
    if hasattr(model, 'get_view_model_name'):
        return model.get_view_model_name()
    model_name = model.__name__
    return view_model_name_by_model_name.get(model_name)

normal_roles = ['guest', 'owner', 'admin']

def is_admin():
    return current_user.is_authenticated and 'admin' in current_user.roles

def get_normal_role(row, view_model):
    #Is the current user logged in?
    if not current_user.is_authenticated:
        return 'guest'
    if 'admin' in current_user.roles:
        return 'admin'
    # is owner
    if 'owner_id' in view_model:
        if row[view_model['owner_id']] == current_user.id:
            return 'owner'
    elif 'owner_id' in row:
        if row['owner_id'] == current_user.id:
            return 'owner'
    elif 'user_id' in row:
        if row['user_id'] == current_user.id:
            return 'owner'
hooks__handle_additional_columns = []
@cassandra_cqlengine.hooks__after_get_public_dict.append
def one_api_hook_after_get_public_dict(item, row, add_additional_columns=True, *args, **kwargs):
    from flask import current_app as app
    one_api_info = import_string(f'{app.app_dot_path}.one_api:view_models')
    view_model_name = item.__class__.__name__
    view_model = one_api_info.get(view_model_name)
    if view_model == None and is_admin():
        view_model = {}
    if view_model != None:
        # remove hidden columns
        hidden_columns = view_model.get('hidden_columns')
        if hidden_columns:
            t = md.resolve_dict_by_paths(row, hidden_columns)
            for v in t:
                obj = v['object']
                key = v['key']
                if key in obj:
                    del obj[key]
        # get getter_columns
        if 'getter_columns' in view_model:
            for key in view_model['getter_columns']:
                row[key] = getattr(item, key)
        # roles ==============================================
        role = get_normal_role(row, view_model)
        if role != 'admin':
            if 'accessible_to' in view_model:
                if role in view_model['accessible_to']:
                    pass
                elif role == 'guest':
                    return None # no permission
                else:
                    can_access = False
                    for role2 in view_model['accessible_to']:
                        if role2 in normal_roles:
                            continue
                        if row[f'{role2}_id'] == current_user.id:
                            can_access = True
                            break
                    if not can_access:
                        return None # no permission
            elif 'inaccessible_to' in view_model:
                if role in view_model['inaccessible_to']:
                    return None # no permission
                elif role == 'guest':
                    return None # no permission
                else:
                    can_access = True
                    for role2 in view_model['inaccessible_to']:
                        if role2 in normal_roles:
                            continue
                        if row[f'{role2}_id'] == current_user.id:
                            can_access = False
                            break
                    if not can_access:
                        return None # no permission
        else:
            # admin
            pass
        # hidden_columns_by_roles
        if role != 'admin':
            if 'hidden_columns_by_role_in' in view_model:
                hidden_columns = view_model['hidden_columns_by_roles']['columns']
                roles = view_model['hidden_columns_by_roles']['roles']
                if role in roles:
                    matched = True
                elif role == 'guest':
                    matched = False
                else:
                    matched = False
                    for role2 in roles:
                        if role2 in normal_roles:
                            continue
                        if row[f'{role2}_id'] == current_user.id:
                            matched = True
                            break
                if matched:
                    t = md.resolve_dict_by_paths(row, hidden_columns)
                    for v in t:
                        obj = v['object']
                        key = v['key']
                        if key in obj:
                            del obj[key]
            elif 'hidden_columns_by_role_not_in' in view_model:
                hidden_columns = view_model['hidden_columns_by_role_not_in']['columns']
                roles = view_model['hidden_columns_by_role_not_in']['roles']
                matched = True # if to remove the hidden columns
                if role in roles:
                    matched = False
                elif role == 'guest':
                    matched = True
                else:
                    for role2 in roles:
                        if role2 in normal_roles:
                            continue
                        if row[f'{role2}_id'] == current_user.id:
                            matched = False
                            break
                if matched:
                    t = md.resolve_dict_by_paths(row, hidden_columns)
                    for v in t:
                        obj = v['object']
                        key = v['key']
                        if key in obj:
                            del obj[key]
                else:
                    pass
        else:
            # admin
            pass
        # roles end ==============================================

        # add_additional_columns
        if add_additional_columns:
            for func in hooks__handle_additional_columns:
                func(row, view_model)
            # example
            # convert gender_columns
            # @one_api.hooks__handle_additional_columns.append
            # def convert_gender_columns(row, view_model):
            #     if 'gender_columns' in view_model:
            #         mapping = md.map_dicts(app.config['USER_GENDERS'], 'value')
            #         t = md.resolve_dict_by_paths(row, view_model['gender_columns'])
            #         for v in t:
            #             obj = v['object']
            #             key = v['key']
            #             # key exists and not none
            #             if obj.get(key):
            #                 if get_user_lang() == "en":
            #                     obj[f'{key}_t'] = mapping[obj[key]]['text']
            #                 else:
            #                     obj[f'{key}_t'] = mapping[obj[key]]['text_'+get_user_lang()]
    else:
        md.abort(403, md.t('no_permission'))
    return row

#
def register(app_or_blueprint):
    models = import_string(f'{app.app_dot_path}.models')
    one_api_info = import_string(f'{app.app_dot_path}.one_api:view_models')

    # init one_api_info
    for view_model_name in one_api_info.keys():
        view_model = one_api_info[view_model_name]
        if 'model_name' in view_model:
            extended_model = one_api_info[view_model['model_name']]
            copy.deepcopy(extended_model)
            merged_view_model = {**extended_model, **copy.deepcopy(view_model)}
            view_model.update(merged_view_model)
        model_name = view_model.get('model_name', view_model_name)
        model = getattr(models, model_name)
        view_model_name_by_model_name[model_name] = view_model_name

    def get_model_by_view_model_name(view_model_name):
        model_name = view_model_name
        info = one_api_info.get(view_model_name)
        if info is None:
            md.abort(400, f'Model `{view_model_name}` not found')
        if 'model_name' in info:
            model_name = info['model_name']
        return getattr(models, model_name)
    def handle_item_before_response(item):
        return item
    def dict_first_key_value(dc):
        key0 = None
        for key in dc.keys():
            if not key.startswith('_'):
                key0 = key
                break
        return key, dc[key]

    @app_or_blueprint.route('/one_api', methods=['POST'])
    @app_or_blueprint.route('/one_api/<api_name>', methods=['POST'])
    def one_api(api_name=None):
        '''
        query data
        {
            model: 'User',
            query: {
                title: {common: '123'},
                id: '123',
                #todo or: {},
            },
            from: 0,
            size: null,
            sort: {created_at: 'desc'},
            columns: {
                id: {},
                avatar: {},
                books: {},
            },
            additional_columns: {
                books: {},
            },
        }
        '''
        def walk_resolve_and_get_result(q=None, view_model_name=None, qo = None, row = None, rows = None, item = None, items = None):
            '''
            qo: query_object
            override
                1. default
                2. rows, items or row, item, qo
                3. q, view_model_name
            '''
            def transform_rows(rows, items, qo):
                is_single = not isinstance(rows, list)
                if is_single:
                    rows = [rows]
                    items = [items]
                needed_columns = qo.get('columns')
                if needed_columns:
                    # cut columns
                    needed_columns_keys = needed_columns
                    if isinstance(needed_columns, dict):
                        needed_columns_keys = needed_columns.keys()
                    needed_columns_keys = set(needed_columns_keys)
                    if len(rows) > 0:
                        to_remove = []
                        for key in rows[0].keys():
                            if key not in needed_columns_keys:
                                to_remove.append(key)

                        for row in rows:
                            for key in to_remove:
                                del row[key]
                            # reoslve child
                            if isinstance(needed_columns, dict):
                                for key in needed_columns:
                                    child = row[key]
                                    item = row[key]
                                    childQo = needed_columns[key] # child query obj
                                    if isinstance(child, list):
                                        if len(child) > 0 and isinstance(child[0], Model):
                                            newChild = []
                                            for item in child:
                                                newChild.append(item.get_public_dict())
                                            row[key] = newChild
                                    elif isinstance(child, Model):
                                        row[key] = child.get_public_dict()
                                    if isinstance(row[key], list):
                                        walk_resolve_and_get_result(rows = row[key], items = item, qo=childQo)
                                    else:
                                        walk_resolve_and_get_result(row = row[key], item = item, qo=childQo)
                if 'additional_columns' in qo:
                    for additional_column_name in qo['additional_columns']:
                        if isinstance(qo['additional_columns'], list):
                            childQo = {}
                        else:
                            childQo = qo['additional_columns'][additional_column_name]
                        for i, item in enumerate(items):
                            row = rows[i]
                            if hasattr(item, additional_column_name):
                                row[additional_column_name] = getattr(item, additional_column_name)
                                child = row[additional_column_name]
                                childItem = child
                                if isinstance(child, list):
                                    if len(child) > 0 and isinstance(child[0], Model):
                                        newChild = []
                                        for item in child:
                                            newChild.append(item.get_public_dict())
                                        row[additional_column_name] = newChild
                                elif isinstance(child, Model):
                                    row[additional_column_name] = child.get_public_dict()
                                if isinstance(row[additional_column_name], list):
                                    walk_resolve_and_get_result(rows=row[additional_column_name], items=childItem, qo=childQo)
                                else:
                                    walk_resolve_and_get_result(row=row[additional_column_name], item=childItem, qo=childQo)
                            else:
                                sub_query_name = f'query_{additional_column_name}'
                                if hasattr(item, sub_query_name):
                                    sub_query = getattr(item, sub_query_name)()
                                    child_result = walk_resolve_and_get_result(q=sub_query, qo=childQo)
                                    #
                                    if child_result.get('data') != None:
                                        row[additional_column_name] = child_result['data']
                                    else:
                                        row[additional_column_name] = child_result['total']
                                    #
                                    if child_result.get('data') != None and isinstance(child_result['data'], list):
                                        if '_meta' not in row:
                                            row['_meta'] = {}
                                        row['_meta'][additional_column_name] = child_result
                                        del child_result['data']
                                else:
                                    md.abort(400, f'Can not resolve additional column "{additional_column_name}" of {item.__class__.__name__}.')

            result = None
            if row or rows:
                if qo:
                    if row:
                        transform_rows(row, item, qo)
                    else:
                        transform_rows(rows, items, qo)
                return
            if not q:
                # get model
                if not view_model_name:
                    return
                model = get_model_by_view_model_name(view_model_name)
                view_model = one_api_info[view_model_name]
                if view_model.get('query') == 'disallowed' and not is_admin():
                    raise Exception(f'The model {view_model_name} can not be queried.')
                # get query
                q = model.elastic()
                if view_model.get('after_query_created'):
                    view_model['after_query_created'](q)
            if 'query' in qo:
                for key in qo['query'].keys():
                    condition = '='
                    value = qo['query'][key]
                    if isinstance(qo['query'][key], dict):
                        condition, value = dict_first_key_value(qo['query'][key])
                    q.where2(key, condition, value)
            #
            size = qo.get('size', 100)
            if 'from' in qo:
                q.take(size, qo['from'])
            else:
                q.take(size)
            #
            if 'sort' in qo:
                sort_list = qo['sort']
                if not isinstance(sort_list, list):
                    sort_list = [sort_list]
                for sort_obj in sort_list:
                    for key in sort_obj.keys():
                        q.sort(key, sort_obj[key])
            #
            if qo.get('trashed'):
                q.trashed()
            #
            if 'count' in qo:
                result = {'total': q.count()}
            else:
                total = None
                # get rows
                if qo.get('first'):
                    t = q.first_public()
                    first_item = t['item']
                    items = []
                    rows = []
                    if first_item:
                        items.append(first_item)
                        rows.append(t['row'])
                else:
                    t = q.get_public()
                    items = t['items']
                    rows = t['rows']
                    total = t['total']
                #
                transform_rows(rows, items, qo)
                result = {'total': total, 'data': rows}
                if qo.get('first'):
                    result['data'] = rows[0] if len(rows) > 0 else None
            return result
        #
        req = md.request_json()
        resp = walk_resolve_and_get_result(view_model_name=req['model'], qo=req)
        return md.jsonify(resp)
# todo md.t, md.jsonify
