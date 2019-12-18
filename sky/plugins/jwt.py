import datetime
import jwt
from flask import current_app as app

def make_token(user_id, remember=False):
    """
    Generates the Auth Token
    :return: string
    """
    if isinstance(remember, datetime.timedelta):
        timeout = remember
    else:
        timeout = app.config.get('SESSION_TIMEOUT_LONG') if remember else app.config.get('SESSION_TIMEOUT')
    payload = {
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=timeout.total_seconds() / 60),
        'iat': datetime.datetime.utcnow(),
        'sub': user_id
    }
    return jwt.encode(
        payload,
        app.config.get('SECRET_KEY'),
        algorithm='HS256'
    )
    
def decode_token(token):
    """
    Decodes the auth token
    :param token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(token, app.config.get('SECRET_KEY'))
        return {'success': True, 'data': payload['sub']}
    except jwt.ExpiredSignatureError:
        return {'success': False, 'type': 'expired'}
    except jwt.InvalidTokenError:
        return {'success': False, 'type': 'invalid'}
