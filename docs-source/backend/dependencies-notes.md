# Dependencies Notes
```py
# flask-socketio
# https://flask-socketio.readthedocs.io/en/latest/
eventlet = "*"
flask-socketio = "*"

# Cerberus provides powerful yet simple and lightweight data validation functionality out of the box and is designed to be easily extensible, allowing for custom validation.
# http://docs.python-cerberus.org/en/stable/
cerberus = "*"

# A ksuid is a K sorted UID. In other words, a KSUID also stores a date component, so that ksuids can be approximately sorted based on the time they were created.
# https://github.com/saresend/KSUID
ksuid = "*"
# flask login (bug fixed)
flask-login = {git = "https://github.com/phphe/flask-login.git"}
# for schedule task
flask-apscheduler = "*"
# Convert string cases between camel case, pascal case, snake case etc…
# https://pypi.org/project/stringcase/
stringcase = "*"
# process pdf
pypdf2 = "*"
# Open API
# https://github.com/zalando/connexion/tree/master/examples/openapi3/jwt
# install cmd: pipenv install connexion[swagger-ui]
connexion = {extras = ["swagger-ui"],version = "*"}
# more stable and powerful server
tornado = "*"
# Talisman is a small Flask extension that handles setting HTTP headers that can help protect against a few common web application security issues.
# https://github.com/GoogleCloudPlatform/flask-talisman
flask-talisman = "*"
# handle database, handle mysql
flask-sqlalchemy = "*"
pymysql = "*"
```
