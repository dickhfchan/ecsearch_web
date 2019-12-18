import os
import json
import functools
from ... import g, multi_LocalProxy

dirname = os.path.dirname(__file__)

@functools.lru_cache()
def _get_languages():
    languages_json_str = open(os.path.join(dirname, 'languages.json'), 'r', encoding='UTF-8').read()
    languages = json.loads(languages_json_str)
    return languages_json_str, languages
languages_json_str, languages = multi_LocalProxy(_get_languages, 2)

@functools.lru_cache()
def _get_countries():
    countries_json_str = open(os.path.join(dirname, 'countries.json'), 'r', encoding='UTF-8').read()
    countries = json.loads(countries_json_str)
    return countries_json_str, countries
countries_json_str, countries = multi_LocalProxy(_get_countries, 2)

def get_user_lang():
    if not g.get('current_user_language'):
        user_lang = request.headers.get('User-Language') or 'en'
        if user_lang not in languages:
            user_lang = user_lang.split('-')[0]
            if user_lang not in languages:
                user_lang = 'en'
        g.current_user_language = user_lang
    return g.current_user_language
# todo import flask babel
