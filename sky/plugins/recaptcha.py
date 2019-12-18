import requests
from .. import current_app as app, abort

def validate_recaptcha(token):
    if app.config['TESTING'] or app.config['RECAPTCHA_DISABLED']:
        return
    r = requests.post('https://www.google.com/recaptcha/api/siteverify', {
        'secret': app.config['RECAPTCHA_SECRET_KEY'],
        'response': token,
    })
    data = r.json()
    if not data['success']:
        abort(400, data['error-codes'])
