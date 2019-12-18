import functools
from .. import current_app as app, languages, countries, multi_LocalProxy

email = {'required': True, 'type': 'string', 'regex': r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', 'maxlength': 255},
password = {'required': True, 'type': 'string', 'maxlength': 255},
gender = {'required': True, 'type': 'string', 'maxlength': 255, 'allowed': app.config['USER_GENDERS']}
price = {"required": True, "type": "number", 'min': 0, 'regex': r'^\d+(\.\d{1,2})$'}

@functools.lru_cache()
def _cached():
    language = {'required': True, 'type': 'string', 'allowed': list(languages.languages.keys())}
    country = {'required': True, 'type': 'string', 'allowed': list(countries.countries.keys())}
    return language, country
language, country = multi_LocalProxy(_cached, 2)
