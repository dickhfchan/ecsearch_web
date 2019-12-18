from flask import current_app as app
from cassandra.cqlengine.models import Model
from .. import module as md

class ElasticQueryDescriptor(object):
    def __get__(self, obj, model):
        return ElasticQuery(model)

class ElasticQuery(object):
    def __call__(self, *args, **kwargs):
        if len(args) == 0:
            return self
        return self.where(*args, **kwargs)
    size = None
    from_index = None
    total = None # access after `get` method called
    _trashed = False
    def __init__(self, model):
        self.model = model
        self.index = model._raw_column_family_name()
        self.conditions = []
        self.sorts = []
    def where(self, name, condition='=', value=None):
        if value is None:
            value = condition
            condition = '='
        self.conditions.append({'name': name, 'condition': condition, 'value': value})
        return self
    def where2(self, name, condition, value=None):
        self.conditions.append({'name': name, 'condition': condition, 'value': value})
        return self
    def take(self, size, from_index=0):
        self.size = size
        self.from_index = from_index
        return self
    def sort(self, name, order='desc'):
        self.sorts.append({'name': name, 'order': order})
        return self
    def trashed(self):
        self._trashed = True
        return self
    def _get_query(self, sort=True):
        q = {}
        if self.size:
            q['size'] = self.size
        if self.from_index:
            q['from'] = self.from_index
        if len(self.conditions) > 0:
            must = []
            must_not = []
            filter = []
            q['query'] = {
                'bool': {
                    'must': must,
                    'must_not': must_not,
                    'filter': filter,
                }
            }
            if self._trashed:
                filter.append({'exists': {'field': 'deleted_at'}})
            else:
                if hasattr(self.model,'deleted_at'):
                    must_not.append({'exists': {'field': 'deleted_at'}})
            for v in self.conditions:
                name = v['name']
                condition = v['condition']
                value = v['value']
                fuzzy_query = False
                elastic_query_obj = None
                negative = False
                if condition.startswith('not'):
                    negative = True
                    condition = condition[4:]
                #
                if condition == '=':
                    elastic_query_obj = {'term': {name: value}}
                elif condition == '!=':
                    elastic_query_obj = {'term': {name: value}}
                    if not negative:
                        negative = True
                elif condition == 'in':
                    elastic_query_obj = {'terms': {name: value}}
                elif condition == 'terms_set':
                    elastic_query_obj = {'terms_set': {name: value}}
                elif condition == '>':
                    elastic_query_obj = {'range': {name: {'gt': value}}}
                elif condition == '>=':
                    elastic_query_obj = {'range': {name: {'gte': value}}}
                elif condition == '<':
                    elastic_query_obj = {'range': {name: {'lt': value}}}
                elif condition == '<=':
                    elastic_query_obj = {'range': {name: {'lte': value}}}
                elif condition == 'between':
                    elastic_query_obj = {'range': {name: {'gte': value[0], 'lte': value[1]}}}
                elif condition == '<between':
                    elastic_query_obj = {'range': {name: {'gt': value[0], 'lte': value[1]}}}
                elif condition == 'between>':
                    elastic_query_obj = {'range': {name: {'gte': value[0], 'lt': value[1]}}}
                elif condition == '<between>':
                    elastic_query_obj = {'range': {name: {'gt': value[0], 'lt': value[1]}}}
                elif condition == 'common':
                    # fulltext
                    elastic_query_obj = {'common': {name: value}}
                    fuzzy_query = True
                elif condition == 'exists':
                    elastic_query_obj = {'exists': {'field': name}}
                elif condition in ['null', 'missing']:
                    elastic_query_obj = {'exists': {'field': name}}
                    if not negative:
                        negative = True
                else:
                    raise Exception(f'Unsupported condition: {condition}')
                #
                if negative:
                    must_not.append(elastic_query_obj)
                elif fuzzy_query:
                    must.append(elastic_query_obj)
                else:
                    filter.append(elastic_query_obj)
        if sort:
            q['sort'] = []
            if len(self.sorts) > 0:
                for v in self.sorts:
                    name = v['name']
                    order = v['order']
                    q['sort'].append({name: order})
            q['sort'].append({'id': 'desc'})
        return q
    def count(self):
        q = self._get_query(sort=False)
        del q['size']
        r = md.elastic_query(self.index, q, count=True)
        return r['count']
    def get(self, elastic=False):
        q = self._get_query()
        query_result = md.elastic_query(self.index, q)
        '''
        error example:
        {'error': {'root_cause': [{'type': 'query_shard_exception', 'reason': 'No mapping found for [created_at] in order to sort on', 'index_uuid': 'k6m-aQHyTE2o8kMEkapAoQ', 'index': 'user'}], 'type': 'search_phase_execution_exception', 'reason': 'all shards failed', 'phase': 'query', 'grouped': True, 'failed_shards': [{'shard': 0, 'index': 'user', 'node': '14e940d8-edef-4c4a-9767-21ee8d6f2572', 'reason': {'type': 'query_shard_exception', 'reason': 'No mapping found for [created_at] in order to sort on', 'index_uuid': 'k6m-aQHyTE2o8kMEkapAoQ', 'index': 'user'}}]}, 'status': 400}
        '''
        if 'error' in query_result:
            first_err_msg = query_result['error']['root_cause'][0]['reason']
            import json
            app.logger.error(f'Elastic error. {first_err_msg}. result: {json.dumps(query_result)}')
            raise Exception(first_err_msg)
        rows = []
        ids = []
        total = query_result['hits']['total']
        for item in query_result['hits']['hits']:
            if item.get('_source'):
                rows.append(item['_source'])
                ids.append(item['_source']['id'])
            else:
                total -= 1
        if not elastic:
            rows = self.model.objects.filter(id__in=ids)
            sortedRows = []
            mapping = {}
            for row in rows:
                mapping[row.id] = row
            for id in ids:
                sortedRows.append(mapping[id])
            rows = sortedRows
        self.total = total
        return rows
    def first(self, elastic=False):
        size = self.size
        self.size = 1
        r = self.get(elastic=elastic)
        self.size = size
        return r[0] if len(r) > 0 else None
    def first_or_404(self, *args, **nargs):
        item = self.first(*args, **nargs)
        if not item:
            md.abort(404)
        return item
    def get_public(self):
        items_old = self.get()
        items = []
        rows = []
        total = self.total
        for item in items_old:
            row = item.get_public_dict()
            if row:
                rows.append(row)
                items.append(item)
            else:
                total = None
        return {'items': items, 'rows': rows, 'total': total}
    def first_public(self):
        item = self.first()
        row = item.get_public_dict() if item else None
        if not row:
            item = None
        return {'item': item, 'row': row}
    def first_public_or_404(self):
        r = self.first_public()
        if not r['item']:
            md.abort(404)
        return r

setattr(Model, 'elastic', ElasticQueryDescriptor())
