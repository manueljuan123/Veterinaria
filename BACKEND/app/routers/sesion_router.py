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
        confirmacion_registro()
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









"""LOGIN
@LoginRouter.route('/', methods=['POST'])
#@vet_middleware
def authentication():
    json_datos = request.get_json()
    email = json_datos["email"]
    password = json_datos["password"]

    user = UserModel.get_or_none(UserModel.email == email)
    if user is None or not user.verify_password(password):
        response = {
        "message":"Lo sentimos, sus credenciales no son correctas. Verifique o regístrese antes de volver a intentarlo",
        "error" : True
                    }        
        return response

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

        response = {
        "message":token, #"Gracias por elegirnos.",
        "error" : False
                    }
        

        return response

"""

"""REGISTRO
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

"""