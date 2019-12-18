# Structure

## app/
### net/
HTTP routes and socketio.
#### Route file header example
```py
from flask import current_app as app
from flask_login import current_user
import app.utils as ut
from app.blueprints import api
from app import middlewares
from app import models
from app.models import Course, CourseLikedByUser, Order, Payment
````
### plugins/
#### apscheduler.py
Check [Schedule Task](./schedule-task.md)
#### cache.py
```py
from app.plugins.cache import cache
value = cache.get('name')
cache.set('name', value, timeout_minutes=None)
# value can be dict, list, string, number, ...
```
#### cassandra_cqlengine_elastic.py
Add custom methods to help query Elasticsearch. Check [this](./db.md#read)
#### cassandra_cqlengine.py
Add custom methods to cassandra python driver. Check [this](./db.md#add-update-delete)
#### fake.py
Generate faker data.
```py
from app.plugins.fake import fake
a = fake.phone()
# base functions: https://github.com/joke2k/faker
# there are 3 custom functions at fake.py: gender, phone, image
# there are some advance functions at app/fake_provider.py
```
#### mail.py
Send email
```py
try:
    from app.plugins.mail import mail, Message
    msg = Message('title', recipients=[email])
    msg.html = render_template('email/your template.html')
    mail.send(msg)
except Exception as e:
    app.logger.warning(f'Failed to send confirm email. email: {email}, error: {str(e)}')
    ut.abort(500, 'Failed to send email, please try again or contact support')
```
#### stripe.py
Stripe
```py
from app.plugins.stripe import stripe
# session will take time to connect stripe server
session = stripe.checkout.Session.create(
  payment_method_types=['card'],
  line_items=[{
    'name': course.title,
    'description': f'Register course: {course.title}' + '\n' + f'School: {course.school.profile.name}',
    'images': [course.cover] + course.photos,
    'amount': cents,
    'currency': 'usd',
    'quantity': 1,
  }],
  customer_email = current_user.email,
  success_url = f'{url_for("home", _external = True)}order?status=success&id={order.id}',
  cancel_url = f'{url_for("home", _external = True)}order?status=cancel&id={order.id}',
)
```
#### system_message_center.py
All system message functions.

### seeds/
Seed database. [DB](./db.md)

### static/
static files, js, css, images, built frontend files.
### templates/
Flask templates folder
### utils/
Commonly used functions. Check [Utils](./utils.md)
### __ init__.py
app module entry
### elastic.py
define elasticsearch indexes. Check [DB Commands](./db.md#commands)
### env.py
[Environment config](./how-to-run.html#environment-config)
### fake_provider.py
advance custom fake functions
### materialized_views.py
Unused
### models.py
Cassandra models
#### define getter for has-one relationship
```py
from werkzeug import cached_property
class StudentProfile(Model):
    user_id      = columns.Text(primary_key=True)

    @cached_property
    def user(self):
        return User.objects(id=self.user_id).first()
```
#### define subquery
```py
class Order(Model):
    id      = columns.Text(primary_key=True, default=ut.str_ksuid)

    def query_payments(self):
        return Payment.elastic('related_id', self.id)
```

## common/
both frontend and backend using files. May be JSON format.
## docs-source/
Docs source, built files are at docs/
## frontend/
site frontend
## frontend-admin/
admin panel frontend
## db.py
To help handle database by commands. [DB Commands](./db.md#commands)
## run.py
backend entry
