from app.routers.SESSIONS.USER.user_router import create_user
from flask import Blueprint, request

from app.models.USER.user_model import UserModel
from app.schemes.USER.user_schema import user_schema, users_schema

from marshmallow.exceptions import ValidationError
from peewee import IntegrityError



RegisterRouter = Blueprint('register', __name__, url_prefix='/register')

@RegisterRouter.route('/', methods=['POST'])
def registration():
    j = request.get_json()
    try:
        schema = user_schema.load(j)
    except ValidationError as err:
        response = {
            "message": f'{err}',
            "error":True
        }, 422

        return response

    try:
        user = UserModel.create(**schema)
    except IntegrityError as err:
        response = {
            "message": f'{err}',
            "error":True
        }, 422

        return response

    response = {
        "query":user_schema.dump(user),
        "message":"Muchas gracias por registrarse con nosotros",
        "error": False
    },201

    return response
    '''
    result = create_user()

    if result:
        response = {
            "message":"Se ha registrado con éxito, *NOMBRE* Gracias por elegirnos.",
            "error": False
        }
        return response

    else:
        response = {
            "message":"Ha ocurrido un error inesperado, por favor, inténtelo de nuevo",
            "error":True
        }
        return response
    '''
    