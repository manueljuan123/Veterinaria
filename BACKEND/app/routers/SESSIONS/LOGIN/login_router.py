from flask import Blueprint, request, jsonify, make_response, session
import jwt

from datetime import datetime, timedelta
from functools import wraps
from config.settings import Config

from marshmallow import exceptions
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError


from app.models.USER.user_model import UserModel
from app.models import database as db

LoginRouter = Blueprint('login', __name__, url_prefix='/login')


@LoginRouter.route('/', methods=['POST'])
def authentication():
    json_datos = request.get_json()
    email = json_datos['email']
    password = json_datos['password']

    user = UserModel.get_or_none(UserModel.email == email)
    if user is None or not user.verify_password(password):
        response = {
        "message":"Lo sentimos, sus credenciales no son correctas. Verifique o regístrese antes de volver a intentarlo",
        "error" : True
                    }
        return response

    else:
        session['logged_in'] = True
        token = jwt.encode(
            {"some": "payload"},
            "secret", algorithm="HS256"
        )
        response = {
        "message":"*nombreToken*, Gracias por elegirnos.",
        "error" : False
                    }
        

        return response
