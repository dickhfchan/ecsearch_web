from flask import current_app as app
from flask_mail import Mail, Message

mail = Mail()
mail.init_app(app)
