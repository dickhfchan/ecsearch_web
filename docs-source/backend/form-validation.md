# Form Validation
Depend on [cerberus](http://docs.python-cerberus.org/en/stable/). More rules please check its docs.
```py
def order_cancel():
    data = ut.request_json()
    schema = {
        'id': {'required': True, 'type': 'string'},
        'reason': {'required': True, 'type': 'string'},
    }
    data = ut.validate_and_filter(schema, data)
```
* ut.validate_and_filter return new data, the keys undefined in schema will be deleted.
* If the data is invalid, ut.validate_and_filter will abort(400, 'Invalid input'). Error detail is in response.

## Custom validation rules
There are some custom validation rules in `app/utils/validation_utils.py`
```py
# usage
def order_cancel():
    data = ut.request_json()
    schema = {
        'id': {'required': True, 'type': 'string'},
        'price': ut.validation_rules['price'],
    }
    data = ut.validate_and_filter(schema, data)
# usage2
def order_cancel():
    data = ut.request_json()
    schema = {
        'id': {'required': True, 'type': 'string'},
        'price': {**ut.validation_rules['price'], 'required': False},
    }
    data = ut.validate_and_filter(schema, data)
```
