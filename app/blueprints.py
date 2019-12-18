from sky import Blueprint, current_app

api = Blueprint('api', __name__, url_prefix='/api')
admin = Blueprint('admin', __name__, url_prefix='/admin')
admin_api = Blueprint('admin_api', __name__, url_prefix='/admin/api')

current_app.register_blueprint(api)
current_app.register_blueprint(admin)
current_app.register_blueprint(admin_api)
