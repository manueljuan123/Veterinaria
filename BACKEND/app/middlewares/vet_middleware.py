""" 
import jwt

from flask import request
from app.models.USER.user_model import UserModel


def vet_middleware():
    def wrap(*arg, **kwargs):
        header = request.headers.get('Authorization')
        auth = jwt.decode(header, key='', algorithms=[''])
        user = UserModel.get_by_id(auth['sub'])
        assert  user.rol == '1', {'msg':'sin permiso'}
        return wrap(*arg, **kwargs)
"""