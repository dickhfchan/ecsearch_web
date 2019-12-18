from .. import abort, current_app
from cerberus import Validator

def make_validator(schema):
    v = current_app.DataValidator(schema, allow_unknown=True)
    return v

# grammar for schema: http://docs.python-cerberus.org/en/stable/
def validate(schema, data, purge_unknown_in_first_level=True):
    """:param purge_unknown_in_first_level: 从data里删除schema第一层没有的key.
Validator的purge_unknown设置会删掉所有层的未定义key, 所以这里自定义purge_unknown_in_first_level.
        :return data
    """
    v = make_validator(schema)
    if not v.validate(data):
        abort(400, {'message': 'Invalid input', 'error': v.errors})
    if purge_unknown_in_first_level:
        for key in list(data.keys()):
            if key not in schema:
                del data[key]
    new_data = v.normalized(data)
    for key in data:
        if key not in new_data:
            del data[key]
        else:
            data[key] = new_data[key]
    return data

class BaseDataValidator(Validator):
    pass
