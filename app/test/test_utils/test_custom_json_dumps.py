from ...utils import custom_json_dumps
import decimal
import datetime
import uuid
from ...models import User

def test_custom_json_dumps():
    # decimal
    assert custom_json_dumps(decimal.Decimal(1)) == '1.0'
    # datetime
    assert custom_json_dumps(datetime.datetime(2018,12,12)) == '"2018-12-12T00:00:00Z"'
    # uuid
    assert custom_json_dumps(uuid.UUID('12345678123456781234567812345678')) == '"12345678-1234-5678-1234-567812345678"'
    # bytes
    assert custom_json_dumps(b'123') == '"123"'
    # model
    item=User(
        password = b'password'
    )
    custom_json_dumps(item)
