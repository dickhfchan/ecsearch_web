# base functions
import random
import hashlib
import string
import bcrypt
import datetime
from flask import current_app as app
# random string, from https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python
def str_rand(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))
def md5(str0):
    return hashlib.md5(str0.encode('utf-8')).hexdigest()
def sha1(str0):
    return hashlib.sha1(str0.encode('utf-8')).hexdigest()
def sha512(str0):
    return hashlib.sha512(str0.encode('utf-8')).hexdigest()
def salt_hash(str0):
    return sha512(md5(str0) + app.config['HASH_SALT'])
# hash password
# return bytes
def hash_pwd(pwd):
    pwd = pwd.encode('utf-8')
    return bcrypt.hashpw(pwd, bcrypt.gensalt())
# pwd: str, hashed: bytes
def pwd_hashed_compare(pwd, hashed):
    pwd = pwd.encode('utf-8')
    return hashed == bcrypt.hashpw(pwd, hashed)
#
def map_dicts(dicts, key):
    r = {}
    for dc in dicts:
        r[dc[key]] = dc
    return r
# may has issue
def walk_tree(obj, paths = None):
    if not paths:
        paths = []
    if isinstance(obj, dict):
        for key, value in obj.items():
            child_paths = paths.copy().append({'parent': obj, 'key_or_index': key})
            walk_tree(value, child_paths)
            yield value, key, obj, child_paths
    elif isinstance(obj, list):
        for i, value in enumerate(list):
            child_paths = paths.copy().append({'parent': obj, 'key_or_index': i})
            walk_tree(value, child_paths)
            yield value, i, obj, child_paths
# decorator =================================
# refer: python descriptor
# refer: https://gist.github.com/carljm/3004616
def make_decorator_with_arguments(decorator_func):
    # wrapper get arguments
    def wrapper(*args, **kwargs):
        # sub_wrapper get func
        def sub_wrapper(func):
            return decorator_func(func, *args, **kwargs)
        return sub_wrapper
    wrapper.__name__ = decorator_func.__name__
    return wrapper

@make_decorator_with_arguments
def override_classmethod(func, cls, name = None, new_name = None, with_old=True):
    """The func must belongs to cls"""
    if name == None:
        name = func.__name__
    if with_old:
        old = cls.__dict__[name]
    @classmethod
    def wrapper(runtime_cls, *args, **kwargs):
        if with_old:
            old_method = old.__get__(None, runtime_cls)
            return func(runtime_cls, old_method, *args, **kwargs)
        else:
            return func(runtime_cls, *args, **kwargs)
    if not new_name:
        new_name = name
    wrapper.__name__ = new_name
    setattr(cls, new_name, wrapper)
    return wrapper

@make_decorator_with_arguments
def add_classmethod(func, cls, name = None):
    return override_classmethod(func, cls, None, new_name=name, with_old=False)

@make_decorator_with_arguments
def override_instance_method(func, cls, name = None, new_name = None, with_old=True):
    if name == None:
        name = func.__name__
    if with_old:
        old = getattr(cls, name)
    def wrapper(self, *args, **kwargs):
        if with_old:
            old_method = old.__get__(self, type(self))
            return func(self, old_method, *args, **kwargs)
        else:
            return func(self, *args, **kwargs)
    if not new_name:
        new_name = name
    wrapper.__name__ = new_name
    setattr(cls, new_name, wrapper)
    return wrapper

@make_decorator_with_arguments
def add_instance_method(func, cls, name = None):
    return override_instance_method(func, cls, None, new_name=name, with_old=False)
# decorator end =================================

# cached getter =================================
# refer: python descriptor
# refer: https://gist.github.com/carljm/3004616
# decorator end =================================

# resolve dict or obj by paths ===============================
def resolve_dict_by_paths(dc, paths):
    r = []
    def walk(keys, obj):
        '''
        obj: dict or list
        '''
        key = keys[0]
        rest = keys[1:]
        if len(rest) == 0:
            if key == '*':
                if obj:
                    i = 0
                    for child in obj:
                        r.append({'object': obj, 'key': i, 'value': child})
                        i += 1
            else:
                if obj:
                    t = {'object': obj, 'key': key}
                    if key in obj:
                        t['value'] = obj[key]
                    r.append(t)
        elif key == '*':
            if obj:
                for child in obj:
                    walk(rest, child)
        else:
            if key in obj:
                walk(rest, obj[key])

    for path in paths:
        keys = path.split('.')
        walk(keys, dc)
    return r

def resolve_obj_by_paths(obj, paths):
    r = []
    def walk(keys, obj):
        '''
        obj: dict or list
        '''
        key = keys[0]
        rest = keys[1:]
        if len(rest) == 0:
            if key == '*':
                if obj:
                    i = 0
                    for child in obj:
                        r.append({'object': obj, 'key': i, 'value': child})
                        i += 1
            else:
                if obj:
                    t = {'object': obj, 'key': key}
                    if hasattr(obj, key):
                        t['value'] = getattr(obj, key)
                    r.append(t)
        elif key == '*':
            if obj:
                for child in obj:
                    walk(rest, child)
        else:
            if hasattr(obj, key):
                walk(rest, getattr(obj, key))

    for path in paths:
        keys = path.split('.')
        walk(keys, obj)
    return r
# resolve dict or obj by paths end===============================

from .datetime_utils import is_iso_timestamp, datetime_to_timestamp, timestamp_to_datetime, datetime_to_utc_unix_timestamp

#
from .elastic_utils import elastic_query, elastic_simple_query

# todo
# from .setting_utils import setting
#
# # todo
# from app.lang import t
# from app.lang.readtrans import lang, get_user_lang
