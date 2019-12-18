# get datetime from TimeUUID: cassandra.util.datetime_from_uuid1
# set default value for Boolean field to simplify search
from werkzeug import cached_property
from cassandra.cqlengine import columns
from cassandra.cqlengine import connection
from cassandra.cqlengine.models import Model
from cassandra.cqlengine.usertype import UserType
from cassandra.cqlengine.query import BatchQuery
from flask_login import UserMixin
import datetime
from flask import current_app as app
from . import utils as ut
import common

#  UserType ==========================
class FileWithName(UserType):
    name = columns.Text()
    url = columns.Text()

class Address(UserType):
    street = columns.Text()
    city = columns.Text()
    state = columns.Text()
    zip_code = columns.Text()
    country = columns.Text()
    map_info = columns.Text()

class ContactAddress(UserType):
    areaCode = columns.Text()
    phone = columns.Text()
    contactName = columns.Text()
    address = columns.UserDefinedType(Address)
    addressDetail = columns.Text()

class PriceItem(UserType):
    size = columns.Text()
    color = columns.Text()
    side = columns.Text()
    price = columns.Decimal()

class Printer(UserType):
    id      = columns.Text(default=ut.str_ksuid)
    model_no = columns.Text()
    name = columns.Text()
    size      = columns.List(columns.Text) # a4, a3
    color     = columns.List(columns.Text) # b/w, color
    side    = columns.List(columns.Text) # single_side, double_side
    price_items =columns.List(columns.UserDefinedType(PriceItem))

class PrintRequirement(UserType):
    type = columns.Text() # all, range, single
    start = columns.Integer()
    end = columns.Integer()
    size = columns.Text()
    color = columns.Text()
    side = columns.Text()
    amount = columns.Decimal()

class PrintFile(UserType):
    original_path      = columns.Text()
    converted_path      = columns.Text()
    preview = columns.List(columns.Text)
    pages = columns.Integer()
    requirements = columns.List(columns.UserDefinedType(PrintRequirement))
    amount = columns.Decimal() # total amount
#  UserType end ==========================

#  models ====================================
# base ================================
class KeyValue(Model):
    key      = columns.Text(primary_key=True)
    value      = columns.Text()

class File(Model):
    id      = columns.Text(primary_key=True, default=ut.str_ksuid)
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
    user_id      = columns.Text()
    path      = columns.Text()
    name      = columns.Text()
    type      = columns.Text()
    size      = columns.Integer()
    reference_count = columns.Integer()

    @cached_property
    def user(self):
        return User.objects(id=self.user_id).first()

    @classmethod
    def add_reference(cls, paths, increment = 1):
        paths = [v for v in paths if v != None]
        query_result = File.elastic('path', 'in', paths).get(elastic=True)
        file_ids = [item['id'] for item in query_result]
        b = BatchQuery()
        for file in cls.objects(id__in=file_ids):
            file.reference_count += increment
            if file.reference_count < 0:
                app.logger.debug('A file reference_count becomes less than 0. It is an error in production. File id: %s'%(str(file.id)))
                file.reference_count = 0
            file.batch(b).save()
        b.execute()

    @classmethod
    def reduce_reference(cls, paths, increment = -1):
        cls.add_reference(paths, increment)

class Payment(Model):
    id      = columns.Text(primary_key=True, default=ut.str_ksuid)
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
    related_id     = columns.Text() # order id
    user_id     = columns.Text()
    provider     = columns.Text()
    payment_provider_id     = columns.Text() # stripe id
    amount      = columns.Decimal()
    info     = columns.Text()
    status         = columns.Text() # unpaid, paid, expired, refunded
    paid_at        = columns.DateTime()
    refunded         = columns.Boolean(default=False)
    refunded_at    = columns.DateTime()
    refund_amount         = columns.Decimal()
    full_amount_refund = columns.Boolean()
    refund_result     = columns.Text()

    @cached_property
    def user(self):
        return User.objects(id=self.user_id).first()

    # custom func
    def do_refund(self, amount=None, requested_by_customer=False):
        # todo wepay refund
        print('todo wepay refund')
        pass
        # import json, dateTime
        # from app.plugins.stripe import stripe
        # full_amount_refund = amount == None
        # if full_amount_refund:
        #     amount = self.amount
        # info = json.loads(self.info)
        # intent = stripe.PaymentIntent.retrieve(info['payment_intent'])
        # kwargs = {}
        # if requested_by_customer:
        #     kwargs['requested_by_customer'] = True
        # if not full_amount_refund:
        #     cents = int(amount * 100)
        #     kwargs['amount'] = cents
        # refund_result = intent['charges']['data'][0].refund(**kwargs)
        # data = {
        #     'status': 'refunded',
        #     'refunded': True,
        #     'refunded_at': datetime.datetime.utcnow(),
        #     'refund_amount': amount,
        #     'full_amount_refund': full_amount_refund,
        #     'refund_result': json.dumps(refund_result),
        # }
        # self.update(**data)

class Setting(Model):
    name      = columns.Text(primary_key=True)
    value      = columns.Text() # json
    note      = columns.Text()
    roles = columns.List(columns.Text)
    level      = columns.Text()
    last_updated_by      = columns.Text()
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
# base end ================================

class User(Model, UserMixin):
    file_fields = ['avatar']

    id      = columns.Text(primary_key=True, default=ut.str_ksuid)
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
    roles = columns.List(columns.Text) # normal, merchant, admin
    password      = columns.Bytes()
    privacy      = columns.Text()
    email      = columns.Text()
    gender     = columns.Text()
    email_confirmed      = columns.Boolean(default=False)
    phone      = columns.Text()
    name      = columns.Text()
    avatar      = columns.Text()
    language      = columns.Text()
    google_id      = columns.Text()
    facebook_id      = columns.Text()
    currency      = columns.Text()
    wechat_id      = columns.Text()
    wechat_info      = columns.Text()

    # sub query
    def query_orders(self):
        return Order.elastic('customer_id', self.id)

    # hooks
    def before_save(self_or_cls, data):
        # if has password and password not hashed(not bytes)
        if 'password' in data and not isinstance(data['password'], bytes):
            data['password'] = ut.hash_pwd(data['password'])
    # custom methods
    #

class Shop(Model):
    id      = columns.Text(primary_key=True, default=ut.str_ksuid)
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
    name = columns.Text()
    merchant_id = columns.Text()
    address = columns.UserDefinedType(ContactAddress)
    latitude = columns.Double()
    longitude = columns.Double()
    open = columns.Boolean(default=False) # 是否营业(手动设置)
    close_on_holiday = columns.Boolean(default=False) # 节假日暂停营业
    open_24_hours = columns.Boolean(default=False)
    open_hours = columns.List(columns.DateTime) # [start, end]
    printers = columns.List(columns.UserDefinedType(Printer))

    @cached_property
    def is_open_now(self):
        if not self.open:
            return True
        # todo close_on_holiday
        if self.open_24_hours:
            return True
        now = datetime.datetime.utcnow()
        if now >= self.open_hours[0] and now <= self.open_hours[1]:
            return True
        return False

class Order(Model):
    file_fields = ['files.*.original_path', 'files.*.converted_path', 'files.*.preview']

    id      = columns.Text(primary_key=True, default=ut.str_ksuid)
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
    printer_id      = columns.Text()
    merchant_id      = columns.Text()
    shop_id      = columns.Text()
    customer_id     = columns.Text()
    shop_name    = columns.Text()
    printer_name    = columns.Text()
    customer_name   = columns.Text()
    customer_message = columns.Text()
    amount     = columns.Decimal()
    # status
    status         = columns.Text() # before_upload, unpaid, expired, paid, canceled, pending, completed, failed
    paid           = columns.Boolean(default=False)
    paid_at        = columns.DateTime()
    has_refund_request     = columns.Boolean(default=False)
    canceled_reason  = columns.Text()
    canceled_by  = columns.Text() # merchant, customer, admin
    canceled_at    = columns.DateTime()
    # special fields
    print_progress = columns.List(columns.Integer) # [printed,total]
    print_status = columns.Text(default='unprinted')
    files      = columns.List(columns.UserDefinedType(PrintFile))
    file_removed = columns.Boolean(default=False)

    # getters
    # todo
    # relationships
    @cached_property
    def shop(self):
        return Shop.objects(id=self.shop_id).first()
    @cached_property
    def printer(self):
        for printer in self.shop.printers:
            if printer.id == self.printer_id:
                return printer
    @cached_property
    def merchant(self):
        return User.objects(id=self.merchant_id).first()
    @cached_property
    def customer(self):
        return User.objects(id=self.customer_id).first()
    @cached_property
    def refund(self):
        return self.query_refunds().sort('created_at', 'desc').first()
    @cached_property
    def payment(self):
        for payment in self.query_payments().sort('created_at', 'desc').get():
            if not payment.expired:
                return payment
    # sub query
    def query_refunds(self):
        return Refund.elastic('order_id', self.id)
    def query_payments(self):
        return Payment.elastic('related_id', self.id)

class Refund(Model):
    id      = columns.Text(primary_key=True, default=ut.str_ksuid)
    created_at = columns.DateTime(default=datetime.datetime.utcnow)
    updated_at = columns.DateTime(default=datetime.datetime.utcnow)
    order_id     = columns.Text()
    request_by = columns.Text() # merchant, customer, admin
    full_amount         = columns.Boolean(default=True)
    amount         = columns.Decimal()
    reason  = columns.Text()
    processed  = columns.Boolean()
    processed_result = columns.Boolean()
    processed_reason  = columns.Text()
    processed_by  = columns.Text() # merchant, customer, admin
