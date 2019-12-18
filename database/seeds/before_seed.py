from app import utils as ut
from app import models

# create admin
# admin user
data = {
    'email': 'admin@admin.com',
    'password': '123456',
    'email_confirmed': True,
    'name': 'Admin',
    'roles': ['admin'],
}
admin = models.User.create(**data)
