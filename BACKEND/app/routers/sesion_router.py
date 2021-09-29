from os import error
from app.middlewares.sesion_middleware import sesion_middleware
from flask import abort, Blueprint, jsonify, make_response, request

from marshmallow.exceptions import ValidationError
from peewee import Delete, IntegrityError, Update

from app.models.usuario_model import UserModel
from app.models.rol_model import RolModel
from app.schemas.sesion_schema import sesion_schema
from app.schemas.usuario_schema import user_schema

from app.routers.email_router import confirmacion_registro

SesionRouter = Blueprint('sesion', __name__, url_prefix='/sesion')


@SesionRouter.route('/login', methods=['POST'])
def sesion_login():
    data = request.get_json()
    try:
        schema = sesion_schema.load(data)
    except ValidationError as err:
        abort(make_response(jsonify(message='Lo sentimos, sus credenciales no son correctas. Verifique o regístrese antes de volver a intentarlo', err= err.messages),422))

    user: UserModel = UserModel.login(email=data['email'], password=data['password'])
    user.create_jwt()
    user = UserModel.select(UserModel, RolModel).join(RolModel).where(UserModel.email == data['email']).get()
    
    return user_schema.dump(user), 202


@SesionRouter.route('/register', methods=['POST'])
def create_user():
    data = request.get_json()
    try:
        schema = user_schema.load(data)
    except:
        abort(make_response(jsonify(message="Dato inválido", error=True), 422))
    try:
        user = UserModel.create(rol_id=3, **schema)
    except:
        abort(make_response(jsonify(message="Dato inválido", error=True), 422))

    user: UserModel = UserModel.login(email=data['email'], password=data['password'])
    user.create_jwt()
    #user = UserModel.select(UserModel, RolModel).join(RolModel).where(UserModel.email == user.email).get()
    user.rol.get()

    return user_schema.dump(user),201


@SesionRouter.route('/salir', methods=['GET'])
@sesion_middleware
def cerrar_sesion():
    user : UserModel = UserModel.select(UserModel.id)
    user.remember_token = Update(None)
    user.get()

    return make_response(jsonify(message="Sesión cerrada"))


