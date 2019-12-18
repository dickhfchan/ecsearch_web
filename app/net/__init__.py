from sky import current_app
from . import base

# @current_app.context_processor
# def inject_global_variables_to_templates():
#     return dict(xx='xx')

# debug
from sky import current_app
if current_app.config['DEBUG']:
    from . import debug
