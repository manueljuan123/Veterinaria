from app.models.rol_model import RolModel
from flask.helpers import make_response
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError
from flask import Blueprint, request

from app.schemas.usuario_schema import user_schema, users_schema
from app.models.usuario_model import UserModel



UsuarioRouter = Blueprint('usuario', __name__, url_prefix='/usuario')

@UsuarioRouter.route('/crear', methods=['POST'])
def crear_usuario():
    j = request.get_json()
    
    try:
        schema = user_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages}, 422
    try:
        user = UserModel.create(**schema)
    except IntegrityError as error:
        return {"errors": f'{error}'}, 422

    user.rol.get()

    return make_response(user_schema.dump(user)), 201


@UsuarioRouter.route('/listado', methods=['GET'])
def listado_usuarios():
    usuarios = UserModel.select().join(RolModel).where(UserModel.rol_id!=1)
    return make_response(users_schema.dumps(usuarios)), 200

    
