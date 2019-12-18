from ...utils import resolve_dict_by_paths, resolve_obj_by_paths

def test_resolve_dict_by_paths():
    dc = {
        'a': 'a',
        'b': 'b',
        'c': {
            'ca': 'ca',
            'cb': [
                {'cb1': 'cb1'},
                {'cb1': 'cb1-1'},
            ]
        }
    }
    r = resolve_dict_by_paths(dc, ['a', 'c.ca', 'c.cb.*.cb1'])
    # print(r)

def test_resolve_obj_by_paths():
    class classc(object):
        ca = 'ca'
        cb = 'cb'
    class classb(object):
        ba = 'ba'
        bb = [
            classc(),
            classc(),
        ]
    class classa(object):
        a = 'a'
        b = classb()
    obj = classa()
    r = resolve_obj_by_paths(obj, ['a', 'b.ba', 'b.bb.*', 'b.bb.*.ca'])
    # print(r)
