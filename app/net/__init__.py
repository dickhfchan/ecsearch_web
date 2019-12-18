from sky import current_app as app
from . import base

# @app.context_processor
# def inject_global_variables_to_templates():
#     return dict(xx='xx')

# debug
if app.config['DEBUG']:
    from . import debug
