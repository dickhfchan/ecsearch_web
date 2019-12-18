from sky import current_app as app, current_user
from . import utils as ut

@ut.create_middleware
def auth(next, *args, **kwargs):
    if not current_user.is_authenticated:
        return ut.t('unauthorized_access'), 401
    return next(*args, **kwargs)

@ut.create_middleware_with_arguments
def role(next, role, *args, **kwargs):
    if role not in current_user.roles:
        return ut.t('no_permission'), 403
    return next(*args, **kwargs)
