from flask import current_app as app, abort
from flask_login import current_user, login_user, logout_user
from .. import utils as ut
from ..blueprints import api
from ..plugins import jwt_auth
from .. import middlewares
from .. import models
from ..models import User
import datetime

@app.route('/api/aa')
def aa():
    return {'data':User.objects().first()}
def bb():
    return {'a':2, 'b':datetime.datetime.now()}
def get_sign_in_url():
    authorize_url = f"{app.config['MICROSOFT_GRAPH_AUTHORITY']}{app.config['MICROSOFT_GRAPH_AUTHORIZE_ENDPOINT']}"
    # Initialize the OAuth client
    aad_auth = OAuth2Session(app.config['MICROSOFT_GRAPH_CLIENT_ID'],
    scope=app.config['MICROSOFT_GRAPH_SCOPES'],
    redirect_uri=app.config['MICROSOFT_GRAPH_REDIRECT'])

    sign_in_url, state = aad_auth.authorization_url(authorize_url, prompt='login')

    return sign_in_url, state

def sign_in():
  # Get the sign-in URL
  sign_in_url, state = get_sign_in_url()
  # Save the expected state so we can validate in the callback
  request.session['auth_state'] = state
  # Redirect to the Azure sign-in page
  return HttpResponseRedirect(sign_in_url)

def get_token(request):
  token = request.session['oauth_token']
  if token != None:
    # Check expiration
    now = time.time()
    # Subtract 5 minutes from expiration to account for clock skew
    expire_time = token['expires_at'] - 300
    if now >= expire_time:
      # Refresh the token
      aad_auth = OAuth2Session(settings['app_id'],
        token = token,
        scope=settings['scopes'],
        redirect_uri=settings['redirect'])

      refresh_params = {
        'client_id': settings['app_id'],
        'client_secret': settings['app_secret'],
      }
      new_token = aad_auth.refresh_token(token_url, **refresh_params)

      # Save new token
      store_token(request, new_token)

      # Return new access token
      return new_token

    else:
      # Token still valid, just return it
      return token
