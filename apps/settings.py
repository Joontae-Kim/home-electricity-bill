# from secret_keys import CSRF_SECRET_KEY, SESSION_KEY
from datetime import timedelta

class Config(object):	
    # Set secret keys for CSRF protection
    SECRET_KEY = "dnflwlqwjsrltp"
    # CSRF_SESSION_KEY = SESSION_KEY
    debug = True

 
class Production(Config):
    DEBUG = True
    CSRF_ENABLED = True
    ADMIN = ""
    SQLALCHEMY_DATABASE_URI = ''
    SQLALCHEMY_ECHO = True
    migration_directory = 'migrations'
    PERMANENT_SESSION_LIFETIME = timedelta(days=1)
