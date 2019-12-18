import json
import decimal
import datetime
import uuid
from .. import utils as ut
from .. import import_string

class ImprovedJsonEncoder(json.JSONEncoder):
    def default(self, obj): #pylint: disable=E0202
        cassandra_Model = import_string('cassandra.cqlengine.models:Model', silent=True)
        cassandra_ModelQuerySet = import_string('cassandra.cqlengine.query:ModelQuerySet', silent=True)
        if isinstance(obj, decimal.Decimal):
            return float(obj)
        elif isinstance(obj, datetime.datetime):
            return ut.datetime_to_timestamp(obj)
        elif isinstance(obj, uuid.UUID):
            return str(obj)
        elif isinstance(obj, bytes):
            return obj.decode("utf-8")
        elif isinstance(obj, datetime.timedelta):
            return obj.total_seconds() * 1000
        elif cassandra_Model:
            if isinstance(obj, cassandra_ModelQuerySet):
                raise Exception('Return ModelQuerySet is not supported now!')
                return list(obj)
            elif isinstance(obj, cassandra_Model):
                return obj.get_public_dict()
        return super().default(obj)

def json_dumps(data):
    return json.dumps(data, cls=CustomJsonEncoder)
