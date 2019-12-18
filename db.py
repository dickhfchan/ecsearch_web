from flask import Flask
import argparse, requests
from cassandra.cqlengine import connection
from cassandra.cqlengine.models import Model
from cassandra.cqlengine.management import sync_table, drop_keyspace, create_keyspace_network_topology
import inspect
from app import models, materialized_views, elastic, utils as ut
from app.plugins.cassandra_cqlengine import db_connection_setup, create_materialized_view
import time

DEFAULT = '__DEFAULT__'

config = ut.get_config()
app = Flask(__name__)
app.config.from_object(config)
with app.app_context():
    db_connection_setup([config.DB_HOST], config.DB_KEYSPACE, lazy_connect=True)

    parser = argparse.ArgumentParser()
    parser.add_argument('--recreate', nargs='?', default=DEFAULT)
    parser.add_argument('--elastic', nargs='?', default=DEFAULT)
    parser.add_argument('--seed', nargs='?', default=DEFAULT)
    # get args and ignore unknown
    args, unknown = parser.parse_known_args()

    if args.recreate != DEFAULT:
        print('recreate start')
        drop_keyspace(config.DB_KEYSPACE)
        create_keyspace_network_topology(config.DB_KEYSPACE, {'DC1': 3})
        # sync_tables
        def is_model(model, name):
            return not name.startswith('_') and inspect.isclass(model) and issubclass(model, Model) and model != Model and getattr(model, 'disable_sync', None) != True
        for name in dir(models):
            model = getattr(models, name)
            if is_model(model, name):
                sync_table(model)
        for name in dir(materialized_views):
            model = getattr(materialized_views, name)
            if is_model(model, name):
                create_materialized_view(model)
        if hasattr(models, 'after_recreate'):
            models.after_recreate()
        print('recreate end')
    if args.elastic != DEFAULT:
        print('elastic start')
        def get_index_name(index_dict):
            for key in index_dict['mappings'].keys():
                return key
        def delete_index(index):
            index_name = get_index_name(index)
            requests.delete('%s/%s'%(config.ELASTIC_URL, index_name))
        def create_index(index):
            index_name = get_index_name(index)
            body = index
            if 'settings' not in body:
                body['settings'] = {}
            if 'keyspace' not in body['settings']:
                body['settings']['keyspace'] = config.DB_KEYSPACE
            r = requests.put('%s/%s'%(config.ELASTIC_URL, index_name), json=body)
            rj = r.json()
            if 'error' in rj:
                print(rj)
                raise Exception('Failed to create index %s'%(index_name))
        time.sleep(3)
        # delete
        for index in elastic.indices:
            delete_index(index)
        # create
        for index in elastic.indices:
            create_index(index)
        print('elastic end')
    if args.seed != DEFAULT:
        print('seed start')
        if args.seed == None:
            import app.seeds.base
        else:
            __import__(f'app.seeds.{args.seed}')
        print('seed end')
