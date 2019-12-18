from faker import Faker
from faker.providers import BaseProvider
import random
from .. import import_string

fake = Faker()

# todo get config if no app created. read gender from config
class ImprovedFakeProvider(BaseProvider):
    def gender(self):
        return random.choice(['male', 'female'])
    # photo
    def image(self, w, h, id = None):
        if not id:
            id = random.randint(1, 1025)
        return 'https://picsum.photos/id/%s/%s/%s'%(id, w, h)
    # simple placeholder image
    # https://fakeimg.pl/
    # todo global config color
    def placeholder(self, w, h, background = None, color=None, retina=1, text=None, font='noto'):
        if not background:
            background = 'CCCCCC'
        if not color:
            color = '909090'
        url = f'https://fakeimg.pl/{w}x{h}/{background}/{color}/?retina={retina}&font=noto'
        if text:
            url = f'{url}&text={text}'
        return url

factories = import_string('database.factories', silent=True)
if factories:
    for name in dir(factories):
        value = getattr(factories, name)
        if name.startswith('_') or not callable(value):
            continue
        setattr(ImprovedFakeProvider, name, value)
fake.add_provider(ImprovedFakeProvider)
