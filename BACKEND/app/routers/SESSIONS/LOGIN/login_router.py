from flask import Blueprint, request, jsonify, make_response, session
import jwt

from datetime import datetime, timedelta
from functools import wraps

from marshmallow import exceptions
from config.settings import Config
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError


from app.models.USER.user_model import UserModel
from app.schemes.USER.user_schema import user_schema, users_schema

LoginRouter = Blueprint('login', __name__, url_prefix='/login')


@LoginRouter.route('/', methods=['POST'])
def authentication():
    json_datos = request.get_json()
    email = json_datos['email']
    password = json_datos['password']

    user = UserModel.get_or_none(UserModel.email == email)
    if user is None or not user.verify_password(password):
        response = {
        "message":"Usuario no encontrado",
        "error" : True
                    }
        return make_response({'WWW-Authenticate' : 'Basic realm: "Authentication Failed!"'})
        
    else:
        response = {
        "message":"Usuario encontrado",
        "error" : False
                    }
        
        session['logged_in'] = True
        token = jwt.encode(
            {"some": "payload"},
            "secret", algorithm="HS256"
        )
        return token, response
