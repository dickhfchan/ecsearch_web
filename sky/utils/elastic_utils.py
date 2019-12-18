import requests, datetime, uuid
from flask import current_app as app
from .. import utils as ut

def elastic_query(index, queryDict, count=False):
    queryDict = _walk(queryDict)
    r = requests.post('%s/%s/%s'%(app.config['ELASTIC_URL'], index, '_search' if not count else '_count'), json=queryDict)
    return r.json()

def elastic_simple_query(index, key, value):
    q = {
        "query": {
          'term': {key: value}
        }
    }
    query_result = elastic_query(index, q)
    rows = [item['_source'] for item in query_result['hits']['hits']]
    total = query_result['hits']['total']
    return {'first': rows[0] if len(rows) > 0 else None, 'rows': rows, 'total': total}

def _walk(old):
  if isinstance(old, list):
    return [_walk(v) for v in old]
  elif isinstance(old, dict):
    r = {}
    for key in old.keys():
      r[key] = _walk(old[key])
    return r
  elif isinstance(old, datetime.datetime):
    return ut.datetime_to_timestamp(old)
  elif isinstance(old, uuid.UUID):
    return str(old)
  else:
    return old
