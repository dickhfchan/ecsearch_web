from sky import current_app as app, current_user, create_middleware, create_middleware_with_arguments

@create_middleware
def auth(next, *args, **kwargs):
    if not current_user.is_authenticated:
        return 'Your access is unauthorized.', 401
    return next(*args, **kwargs)

@create_middleware_with_arguments
def role(next, role, *args, **kwargs):
    if role not in current_user.roles:
        return "You don't have permission to access.", 403
    return next(*args, **kwargs)
