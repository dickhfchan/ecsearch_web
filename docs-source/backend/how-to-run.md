# How to Run
The backend (python) depends on pipenv. pipenv should be installed globally.

## pipenv
doc: [https://github.com/pypa/pipenv](https://github.com/pypa/pipenv)

Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world. Windows is a first-class citizen, in our world.

It automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates the ever-important Pipfile.lock, which is used to produce deterministic builds.

### How to install pipenv by pip?
check pipenv doc for other methods.
```sh
sudo pip3 install pipenv
```

Install pipenv for all users
```sh
sudo pip3 install pipenv
```
Install pipenv for current user
```sh
pip3 install --user pipenv
```
check pipenv doc for other methods.

## Environment config
config is at: app/config.py. If you want to set config only for current environment, add them into app/env.py

You may need to set these config for an environment:
```py
PORT = '8071'
DB_HOST = '127.0.0.1'
ELASTIC_URL = 'http://127.0.0.1:9200'
RECAPTCHA_DISABLED = True
```

## Runtime Mode
The project can run in different mode, such as development, production. Config is different in different mode. The default mode is production. Add `--dev` to cmd to run in development mode. e.g.:
```sh
python run.py --dev
python db.py --dev
```

## Run in Backend
### Nohup (easy)
`nohup`. From Wikipedia, the free encyclopedia. nohup is a POSIX command to ignore the HUP (hangup) signal. The HUP signal is, by convention, the way a terminal warns dependent processes of logout. Output that would normally go to the terminal goes to a file called nohup.out if it has not already been redirected.

```sh
nohup python run.py > nohup.out 2>&1 & echo $! > nohup.pid
# dev
nohup python run.py --dev > nohup.out 2>&1 & echo $! > nohup.pid
# Stop it
kill -9 `cat nohup.pid`
```
### Supervisor
Supervisor is stronger. https://github.com/Supervisor/supervisor

## Install pipenv and run project step by step
This task is prone to error. Please follow this guide.
```sh
# Install pipenv for current
pip3 install --user pipenv
# If you get error: `unsupported locale setting`, execute follow commands
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
# init environment with specified python version
pipenv --python 3.7
# Install dependences. It may take about 10 minutes because of cassandra-driver.
pipenv install
pipenv install --dev # install development dependences
# Active virtual environment.(CTRL D: deactive virtual environment)
pipenv shell
# Run in development
python run.py --dev
```
