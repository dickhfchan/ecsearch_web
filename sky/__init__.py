import functools
from werkzeug.utils import import_string
from werkzeug.local import LocalProxy
from werkzeug import cached_property
from flask import Flask, g, current_app, abort, Response, render_template, url_for, request, Blueprint
from flask_login import current_user, login_user, logout_user, UserMixin
from .utils import str_rand, md5, sha1, sha512, salt_hash, hash_pwd, pwd_hashed_compare, map_dicts
from .utils import make_decorator_with_arguments
from .utils import override_classmethod, add_classmethod, override_instance_method, add_instance_method
from .utils import resolve_dict_by_paths, resolve_obj_by_paths

# todo use app logger debug, warning
def create_app(import_name, app_path, enabled_plugins, after_app_created=None, get_user_by_id=None, env=None):
    app_dot_path = app_path.replace('/', '.')
    # app and openapi
    app = None
    openapi_app = None
    if enabled_plugins.get('openapi'):
        import connexion
        openapi_app = connexion.FlaskApp(import_name, specification_dir=f'{app_path.strip("/")}/openapi/')
        app = openapi_app.app
        app.openapi_app = openapi_app
    else:
        app = Flask(import_name)
    app.app_path = app_path
    app.app_dot_path = app_dot_path
    app.enabled_plugins = enabled_plugins
    if after_app_created and not after_app_created():
        return app
    # config
    config = get_config(app_dot_path, env)
    app.config.from_object(config)
    app.secret_key = app.config['SECRET_KEY']
    # custom json encoder
    from .plugins.improved_json_encoder import ImprovedJsonEncoder
    app.json_encoder = ImprovedJsonEncoder
    # proxy_fix
    if enabled_plugins.get('proxy_fix'):
        from werkzeug.middleware.proxy_fix import ProxyFix
        '''
        Needed when app behind proxy, such as nginx or vue proxy server.
        If not fixed, url_for and session will not work properly.
        '''
        app.wsgi_app = ProxyFix(app.wsgi_app)
    # data validation
    DataValidator = import_string(f'{app_dot_path}.validator:DataValidator', silent=True)
    app.DataValidator = DataValidator or BaseDataValidator
    # cassandra
    if enabled_plugins.get('cassandra'):
        from cassandra.cqlengine import connection
        connection.setup([app.config['DB_HOST']], app.config['DB_KEYSPACE'], lazy_connect=True)
        from .plugins import cassandra_cqlengine, cassandra_cqlengine_elastic
    #
    with app.app_context():
        # cache
        # Check Configuring Flask-Cache section for more details
        if enabled_plugins.get('cache'):
            from flask_caching import Cache
            global cache
            cache = Cache(config={'CACHE_TYPE': 'simple'})
            #
            oldSet = cache.set
            def custom_cache_set(key, value, timeout = None):
                '''
                timeout, unit minute
                '''
                if timeout != None:
                    timeout *= 60
                return oldSet(key, value, timeout)
            cache.set = custom_cache_set
            cache.init_app(app)
        # schedule_task
        if enabled_plugins.get('schedule_task'):
            from flask_apscheduler import APScheduler
            scheduler=APScheduler()
            scheduler.init_app(app)
            scheduler.start()
            app.scheduler = scheduler
            import_string(f'{app_dot_path}.schedule_tasks', silent=True)
        # flask_login
        if enabled_plugins.get('flask_login'):
            from flask_login import LoginManager, user_loaded_from_request
            from flask.sessions import SecureCookieSessionInterface
            User = import_string(f'{app_dot_path}.models:User')
            def get_user_by_id2(id):
                if enabled_plugins.get('cassandra'):
                    return User.objects(id=id).first()
                elif get_user_by_id:
                    return get_user_by_id(id)
                else:
                    raise Exception("Can't get user by id. The argument get_user_by_id is required.")
            # session is also inited
            login_manager = LoginManager()
            login_manager.init_app(app)
            app.login_manager = login_manager
            if app.config.get('FLASK_LOGIN_DISABLE_COOKIE_LOGIN'):
                # with token
                @login_manager.request_loader
                def load_user_from_request(request):
                    from .plugins.jwt import decode_token
                    token = request.headers.get('Authorization')
                    if token:
                        prefix = 'Bearer '
                        if token.startswith(prefix):
                            token = token[len(prefix):]
                        r = decode_token(token)
                        if r['success']:
                            user_id = r['data']
                            return get_user_by_id2(user_id)
                    return None
                # disable cookie
                class CustomSessionInterface(SecureCookieSessionInterface):
                    """Prevent creating session from API requests."""
                    def save_session(self, *args, **kwargs):
                        if g.get('login_via_header'):
                            return
                        return super(CustomSessionInterface, self).save_session(*args, **kwargs)
                app.session_interface = CustomSessionInterface()
                #
                @user_loaded_from_request.connect
                def user_loaded_from_request_func(self, user=None):
                    g.login_via_header = True
            else:
                # with cookie
                @login_manager.user_loader
                def load_user(user_id):
                    return get_user_by_id2(user_id)
        # route
        if enabled_plugins.get('route'):
            route = import_string(f'{app_dot_path}.net', silent=True)
    return app

cache = None # none if not init

def get_config(dir_dot_path, env):
    """Get config for specified dot path and env.

        :param dir_dot_path: str. eg: app.
        :param env: str. default: production. values: production, test, development.
                    If none, try get from command args: --env, --dev, --test
        :return: class
    """
    import argparse
    configs = import_string(f'{dir_dot_path}.config')
    local_config = import_string(f'{dir_dot_path}.env', silent=True)
    if not env:
        parser = argparse.ArgumentParser()
        DEFAULT = '__DEFAULT__'
        parser.add_argument('--env', nargs='?', default=DEFAULT)
        parser.add_argument('--dev', nargs='?', default=DEFAULT)
        parser.add_argument('--test', nargs='?', default=DEFAULT)
        args, unknown = parser.parse_known_args()
        # resolve env
        env = None
        if args.env != DEFAULT:
            env = args.env
        if args.test != DEFAULT:
            env = 'test'
        elif args.dev != DEFAULT:
            env = 'development'
        else:
            if local_config and hasattr(local_config, 'ENV'):
                env = local_config.ENV
            else:
                env = 'production'
    #
    config = getattr(configs, env)
    class resolved_config(config):
        pass
    if local_config:
        for name in dir(local_config):
            if not name.startswith('_'):
                setattr(resolved_config, name, getattr(local_config, name))
    setattr(resolved_config, 'ENV', env)
    setattr(resolved_config, 'DEBUG', env != 'production')
    setattr(resolved_config, 'TESTING', env == 'test')
    return resolved_config

def request_json(disallow_whitespace = True, convert_datetime = True):
    from . import utils as ut
    data = request.get_json()
    if not data:
        return None
    if disallow_whitespace or convert_datetime:
        #
        def deep_check(obj):
            # obj: dict/list
            keyValues = enumerate(obj)
            if isinstance(obj, dict):
                keyValues = [(t[1], obj[t[1]]) for t in list(keyValues)]
            for k,v in keyValues:
                if isinstance(v, str):
                    if disallow_whitespace:
                        if obj[k].strip() != obj[k]:
                            abort(400, 'The user input has whitespace at start or end.')
                    if convert_datetime and ut.is_iso_timestamp(obj[k]):
                        obj[k] = ut.timestamp_to_datetime(obj[k])
                elif isinstance(v, (dict, list)):
                    deep_check(v)
        deep_check(data)
    return data

# decorator. help to create middleware easily
def create_middleware(middleware_func):
    def wrapped_middleware(next):
        def wrapped_view(*args, **kwargs):
            return middleware_func(next, *args, **kwargs)
        wrapped_view.__name__ = next.__name__
        return wrapped_view
    wrapped_middleware.__name__ = middleware_func.__name__
    return wrapped_middleware

def create_middleware_with_arguments(middleware_func):
    def wrapped_middleware(*mdl_args, **mdl_kwargs):
        # sub_wrapper get func
        def sub_wrapper(next):
            def wrapped_view(*args, **kwargs):
                args = [*mdl_args, *args]
                kwargs = {**mdl_kwargs, **kwargs}
                return middleware_func(next, *args, **kwargs)
            wrapped_view.__name__ = next.__name__
            return wrapped_view
        return sub_wrapper
    wrapped_middleware.__name__ = middleware_func.__name__
    return wrapped_middleware

def success():
    return 'success'

def str_ksuid():
    from ksuid import ksuid
    return str(ksuid())

def multi_LocalProxy(multi_getter, count):
    ls = []
    for i in range(0, count):
        def single_getter():
            return multi_getter()[i]
        ls.append(LocalProxy(single_getter))
    return ls

@functools.lru_cache()
def _get_fake():
    from .plugins.fake import fake
    return fake
fake = LocalProxy(_get_fake)

def send_mail(*args, **kwargs):
    from .plugins.mail import mail
    return mail.send_message(*args, **kwargs)

@functools.lru_cache()
def _get_socketio():
    from flask_socketio import SocketIO
    return SocketIO(current_app, cors_allowed_origins=current_app.config['SOCKET_CORS_ALLOWED_ORIGINS'])
socketio = LocalProxy(_get_socketio)

def run_app_with_tornado(app):
    if app.config['DEBUG']:
        app.logger.debug("Tornado don't support Flask debug, so app.run used.")
        app.run(host=app.config['HOST'],port=app.config['PORT'], debug=app.config['DEBUG'])
    else:
        from tornado.wsgi import WSGIContainer
        from tornado.httpserver import HTTPServer
        from tornado.ioloop import IOLoop, PeriodicCallback
        import signal

        is_closing = False
        def signal_handler(signum, frame):
            app.logger.debug('exiting...')
            global is_closing
            is_closing = True
        def check_exit():
            if is_closing:
                # clean up here
                IOLoop.instance().stop()
                app.logger.debug('exit success')
        app.logger.debug(f"Address: http://{app.config['HOST']}:{app.config['PORT']}")
        signal.signal(signal.SIGINT, signal_handler)
        # xheaders=True is for Running behind a load balancer: http://www.tornadoweb.org/en/stable/guide/running.html#running-behind-a-load-balancer
        http_server = HTTPServer(WSGIContainer(app), xheaders=True)
        http_server.listen(app.config['PORT'], address=app.config['HOST'], debug=True)
        PeriodicCallback(check_exit, 500).start()
        IOLoop.instance().start()

from .plugins.improved_json_encoder import json_dumps
from .plugins.data_validation import validate, BaseDataValidator
from .plugins.setting import setting
from .plugins.i18n import get_user_lang, languages, countries
