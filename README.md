# Note
This is old docs. [New Doc](https://todo.com/static/docs_DuadaE234S9dADJHCS9IADa8dy7HJOjas98FSD/index.html)
# About pipenv
The project depends on pipenv. pipenv should be installed on your computer globally. https://github.com/pypa/pipenv

Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world. Windows is a first-class citizen, in our world.

It automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates the ever-important Pipfile.lock, which is used to produce deterministic builds.
## How to install pipenv by pip?
**[Install pipenv and run project step by step](#run_step_by_step)**

check pipenv doc for other methods.
```sh
sudo pip3 install pipenv
```
<a name="run_step_by_step"></a>
# Install pipenv and run project step by step
This task is prone to error. Please follow this guide.
```sh
# Install pipenv for current
pip3 install --user pipenv
# If you get error: `unsupported locale setting`, execute follow commands
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
# Enter server directory
cd server
# Make sure the server directory is owned by current user not root
ls -l # check file owner
sudo chown current_user_name ./ -R # change file owner
# Check if the current working directory is correct.
pipenv --where
# If you have executed `pipenv` in parent directory, the working directory may be the parent directory. So goto that directory:
cd your wrong working directory
pipenv --rm # remove the virtual environment
rm Pipfile Pipfiel.lock # remove the unnecessary files
# init environment with specified python version
pipenv --python 3.7
# Install dependences. It may take about 10 minutes because of cassandra-driver.
pipenv install
pipenv install --dev # for development
# Active virtual environment.(CTRL D: deactive virtual environment)
pipenv shell
# Run in development
python run.py --dev
```
# Project cmds
## How to install packages?
**[Install pipenv and run project step by step](#run_step_by_step)**
```sh
# !!! It may take minutes because of cassandra-driver.
pipenv install
# install dev-packages
pipenv install --dev
```
## How to install a new package?
```sh
pipenv install yourpackage
# install dev-packages
pipenv install --dev yourpackage
# !!! after a new package installed, pipenv may take minutes to generate lock. You can install new package in another terminal to avoid be blocked.
```
## How to enter and exit virtual environment with pipenv?
```sh
# Before run project, you should enter the virtual environment
pipenv shell
# exit virtual environment
press CTRL+D
```
## How to run app?
```sh
python run.py
# Forced to run in development mode
python run.py --dev
# Forced to run in test mode
python run.py --test
```
## How to use nohup run app in background?
nohup is just for dev, not use it in production.
```sh
nohup python run.py > nohup.out 2>&1 & echo $! > nohup.pid
nohup python run.py --dev > nohup.out 2>&1 & echo $! > nohup.pid
# Stop it
kill -9 `cat nohup.pid`
```
## How to add config? How to set env?
configs are in app/config.py . The configs in it will be tracked by git. If you want add a config only for your work environment, write them in file app/\__local_config.py . \__local_config is ignored by git.

If the project is in development, please add app/\__local_config.py like follow:
```py
ENV = 'development'
```
Then the project will run in development.

## How to operate database?
```sh
# drop old keyspace if existed, recreate keyspace and all tables
python db.py --recreate
python db.py --recreate --test
python db.py --recreate --dev
# execute seed
python db.py --seed
# both
python db.py --recreate --seed
```
# Develop project
## How to add a route?
Add a file in app/http, remember import it in app/\__init\__.py
```py
from flask import current_app as app

@app.route('/')
def home():
    return 'hello word'
```
Add a route under api
```py
from ..blueprints import api

# The url prefix of api is /api, so this route url is /api/home
@api.route('/home')
def home():
    return 'this is api'
```
Please use underline instead of dash in url like function name.

The route function name will be set as endpoint. endpoint can not be repeated. So please add prefix to route function name. Example, for `/api/user/keep_alive`, add a file `/app/http/user.py` . Attention! The function name is `user_keep_alive`, not `keep_alive`
```py
from ..blueprints import api

@api.route('/user/keep_alive')
def user_keep_alive():
    return '...'
```
Advanced
```py
from ..blueprints import api

# multiple url
# custom http method
@api.route('/user/me')
@api.route('/user/current')
@api.route('/get_my_detail', methods=['POST'])
def xxx():
    return '...'
```
## How to return non str in route function?
Valid ways
```py
return 'hello'
return 'hello', 200
return 'hello', 200, {'ONE-CUSTOM-HTTP-HEADER': 'value'}
return '', 404
return 'Invalid request data', 400 # client error
return 'Server Error', 500
from flask import Response
return Response(...)
```
If you want return dict, list, model, use `utils.jsonify`. Attention! It adds a header `{'Content-type': 'application/json'}`.
```py
from .. import utils as ut
return ut.jsonify({'key': 'value'})
return ut.jsonify({'key': 'value'}, 200)
return ut.jsonify(current_user)
```
## How to abort request?
Use `utils.abort`, it is extended from `flask.abort`
```py
from .. import utils as ut
ut.abort(404)
ut.abort(400, 'Invalid input')
# message can be complex data, like dict, model
ut.abort(status, message = None, headers = None)
```
## How to return error message?
You can return non-200 status code in route function, or use abort. Error message must be str. Use error message as response body. If you want to return json to include other info, the json should contain `message`:
```py
from .. import utils as ut

return 'Illegal access.', 400
return ut.jsonify({'message': 'Invalid input', 'detail': {...}}, 400)
# or
ut.abort(400, {'message': 'Invalid input', 'detail': {...}})
```
## How to use middleware? How to use auth middleware?
```py
from ..blueprints import api
from .. import middlewares

@api.route('/user/keep_alive')
@middlewares.auth
def user_keep_alive():
    return '...'
```
## How to get posted json from user?
```py
from .. import utils as ut
data = ut.request_json()
```
## How to query model?
More check the doc of `python-driver`: https://datastax.github.io/python-driver/
```py
from .. import models
models.User.objects.filter(id='str id or uuid').first()
```
## How to save and update model?
The model contains some fileds need be maintained automatically. Such as `id`, `created_at`, `updated_at`. So use `utils.store` to store new model, `utils.update` to update model. Use `fillable_fields` or `guarded_fields` in model to protect some fields. Use `ut.make_fillable` to remove guarded fields in user input.
```py
from .. import utils as ut
from .. import models
# store
data = {'name': 'Jim'}
jim = ut.store(models.User, data)
# update
data = {'sex': 'male'}
ut.update(models.User, data, jim.id)
# safety
data = ut.request_json()
ut.make_fillable(models.User, data)
ut.store(models.User, data)
```
# Test
## How to run test?
```sh
pytest --pyargs app
# -s to show print
pytest -s --pyargs app
```
