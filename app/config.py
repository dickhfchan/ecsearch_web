import datetime, pytz

class base:
    HOST = '0.0.0.0'
    PORT = '8074'
    # database
    DB_NAME = "ecsearchhk_ecsearch"
    DB_HOST = '127.0.0.1'
    DB_PASS = ''
    #
    APP_NAME = 'Ecsearch'
    SECRET_KEY = 'ecsearch^m(ht4oyq6iph&j54mc^w#ag&pafsdnj%v^oyx9l1h0'
    HASH_SALT = '&vwK!9&01h4t_^XKA'
    #
    SOCKETIO_CORS_ALLOWED_ORIGINS = '*'
    # auth
    SESSION_TIMEOUT = datetime.timedelta(hours=1)
    SESSION_TIMEOUT_LONG = datetime.timedelta(hours=8)
    # True: for token login; False: for cookie login
    FLASK_LOGIN_DISABLE_COOKIE_LOGIN = True
    #
    JWT_AUTH_NAME = 'ndDkci9M'
    # site
    SITE_HOME_TITLE = APP_NAME
    # APScheduler
    SCHEDULER_TIMEZONE = pytz.utc
    # google recaptcha
    RECAPTCHA_SITE_KEY = ''
    RECAPTCHA_SECRET_KEY = ''
    RECAPTCHA_DISABLED = False
    # google signin
    GOOGLE_SINGIN_CLIENT_ID = ''
    GOOGLE_SINGIN_SECRET_KEY = ''
    # google map
    GOOGLE_MAP_API_KEY = ''
    # facebook signin
    FACEBOOK_SINGIN_APP_ID = ''
    # s3
    S3_ACCESS_KEY_ID = ''
    S3_SECRET_ACCESS_KEY = ''
    S3_BUCKET_NAME = ''
    S3_MAX_SIZE = 1024 * 1024 * 300 # 300m
    S3_REGION = ''
    S3_URL_PREFIX = ''
    # stripe
    STRIPE_CLIENT_ID = ''
    STRIPE_PUBLISHED_KEY = ''
    STRIPE_SECRET_KEY = ''
    STRIPE_WEBHOOK_SIGNING_SECRET_KEY = ''
    # mail, these are only for development
    MAIL_SERVER = ''
    MAIL_PORT = ''
    MAIL_USERNAME = ''
    MAIL_PASSWORD = ''
    MAIL_DEFAULT_SENDER_NAME = APP_NAME
    MAIL_DEFAULT_SENDER_ADDRESS = ''
    MAIL_DEFAULT_SENDER = MAIL_DEFAULT_SENDER_NAME, MAIL_DEFAULT_SENDER_ADDRESS
    MAIL_TOKEN_TIMEOUT = datetime.timedelta(hours=1) # confirm email and reset password email token live duration
    #
    FAKER_SEED = 160956
    # user
    USER_GENDERS = ['male', 'female']
    # order
    ORDER_TIMEOUT = datetime.timedelta(minutes=10)
    # NIM https://yunxin.163.com/?from=nim&clueFrom=nim
    NIM_SYSTEM_ID = '__system__' # as sender of system message
    NIM_SYSTEM_SECRET_TOKEN = '__system__NSI9U982djasd9auUS92JEKAx9'

class development(base):
    # DB_HOST = '127.0.0.1'
    # SERVER_NAME = 'localhost:8072'
    #
    RECAPTCHA_DISABLED = True
    # stripe
    STRIPE_CLIENT_ID = ''
    STRIPE_PUBLISHED_KEY = ''
    STRIPE_SECRET_KEY = ''
    # NIM https://yunxin.163.com/?from=nim&clueFrom=nim
    NIM_APP_KEY = ''
    NIM_SECRET_KEY = ''
    # Open API
    OPEN_API_SWAGGER_UI = True
class production(base):
    pass

class test(development):
    DB_KEYSPACE = '%s_test'%(development.DB_KEYSPACE)
