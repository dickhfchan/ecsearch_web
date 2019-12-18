import datetime, re
from sky import current_app as app, url_for, request, render_template, current_user, cache, setting
from app.blueprints import api
from app import middlewares, models

@app.route('/')
def home():
    return render_template('index.html')
