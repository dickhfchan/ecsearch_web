from flask import Flask
from app import models, utils as ut
from app.plugins.cassandra_cqlengine import db_connection_setup
from app.plugins import nim

config = ut.get_config()
app = Flask(__name__)
app.config.from_object(config)
with app.app_context():
    db_connection_setup([config.DB_HOST], config.DB_KEYSPACE, lazy_connect=True)

    # create system NIM account
    post_data = {
        'accid': app.config['NIM_SYSTEM_ID'],
        'token': app.config['NIM_SYSTEM_SECRET_TOKEN'],
        'name': 'System Messages',
    }
    print('start to create system NIM account')
    r = nim.post('user/create.action', post_data)
    r = r.json()
    print('result of create system NIM account:', r)
