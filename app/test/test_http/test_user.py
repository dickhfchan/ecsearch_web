# import json
# from flask import url_for
# from . import client
# from ...plugins.faker import faker
# from ... import models
# from ... import utils as ut
#
# test_student = {
#     'email': 'test_student@test.com', 'password': '0f97241D2KJAa3',
#     'first_name': 'Nancy', 'last_name': 'Morgan',
# }
# if not models.User.objects.filter(email = test_student['email']).first():
#     ut.store(models.student, {**test_student, 'password': test_student['password']})
#
# def test_student_register(client):
#     response = client.post(
#         url_for('api.user_student_register'),
#         data = json.dumps({
#             'recaptcha': None,
#             'email': faker.email(),
#             'first_name': faker.first_name(),
#             'last_name': faker.last_name(),
#             'password': faker.password(),
#         }),
#         content_type='application/json',
#     )
#
# def test_login(client):
#     response = client.post(
#         url_for('api.user_login'),
#         data = json.dumps({
#             'recaptcha': None,
#             'email': test_student['email'],
#             'password': test_student['password'],
#         }),
#         content_type='application/json',
#     )
