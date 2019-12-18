import datetime, re
from flask import current_app as app, url_for, request, render_template
from flask_login import current_user
from app import utils as ut, middlewares, models
from app.blueprints import api
from app.plugins.cache import cache

# @api.route('/<path:path>')
# def api_404(path):
#     return '', 404

def client_initial_data():
    '''客户端启动时需获得的初始数据. Get initial data for client.'''
    initialData = {}
    # client config
    config = _get_config_for_client()
    initialData['config'] = config
    return ut.jsonify(initialData)

def _get_config_for_client():
    config = {}
    include = [
        r'^APP_.*',
        r'^JWT_.*',
        r'^SITE_.*',
        r'^RECAPTCHA_.*',
        r'^GOOGLE_.*',
        r'^FACEBOOK_.*',
        r'^PAYMENT_.*',
        r'^S3_.*',
        r'^STRIPE_.*',
        r'^ORDER_.*',
        r'^NIM_.*',
        r'^MINI_PROGRAM_.*',
    ]
    exclude = [
        r'.*SECRET.*',
    ]
    for key in app.config:
        included = False
        excluded = False
        for rule in include:
            if re.match(rule, key):
                included = True
                break
        if included:
            for rule in exclude:
                if re.match(rule, key):
                    excluded = True
                    break
        if included and not excluded:
            config[key] = ut.setting(key)
    return config
