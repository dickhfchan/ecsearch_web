import json
from .. import current_app as app, current_user, import_string, g
DEFAULT_ARG = []

# todo other database
def setting(name, value = DEFAULT_ARG):
    Setting = import_string(f'{app.app_dot_path}.models:Setting')
    store_name = f'setting_store_{__file__}'
    if not hasattr(g, store_name):
        setattr(g, store_name, {})
    store = getattr(g, store_name)
    if value is DEFAULT_ARG:
        # get
        if name not in store:
            item = Setting.objects(name=name).first()
            if not item:
                if name not in app.config:
                    raise Exception(f'Setting "{name}" not existing.')
                else:
                    store[name] = app.config[name]
            else:
                store[name] = json.loads(item.value)
        return store[name]
    else:
        # set
        write_data = {
            'name': name,
            'value': json.dumps(value),
            'last_updated_by': current_user.id if current_user and current_user.is_authenticated else None,
        }
        old = Setting.objects(name=name).first()
        if old:
            old.update(**write_data)
        else:
            Setting.create(**write_data)
        store[name] = value
