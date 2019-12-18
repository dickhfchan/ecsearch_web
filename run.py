import sky

def create_app():
    app = sky.create_app(__name__, 'app', enabled_plugins={
        # 'openapi': True,
        'proxy_fix': True,
        # 'cassandra': True,
        'cache': True,
        'schedule_task': True,
        'flask_login': True,
        'route': True,
    })
    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        blueprints = sky.import_string(f'{app.app_dot_path}.blueprints')
        enabled_plugins = app.enabled_plugins
        # talisman
        # Talisman is a small Flask extension that handles setting HTTP headers that can help protect against a few common web application security issues.
        # https://github.com/GoogleCloudPlatform/flask-talisman
        # from flask_talisman import Talisman
        # Talisman(app)

        # openapi register specification file
        if enabled_plugins.get('openapi'):
            options = {"swagger_ui": app.config.get('OPEN_API_SWAGGER_UI')}
            app.openapi_app.add_api('api.yaml', base_path=blueprints.api.url_prefix, options=options)

        # one_api
        # if not enabled_plugins.get('cassandra'):
        #     raise Exception('one_api only support cassandra now')
        # from sky.plugins import one_api
        # one_api.register(blueprints.api)

        sky.socketio.run(app, host=app.config['HOST'],port=app.config['PORT'], debug=app.config['DEBUG'])
