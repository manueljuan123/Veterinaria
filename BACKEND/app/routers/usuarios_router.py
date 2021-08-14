from logging import NullHandler
from app.models.rol_model import RolModel
from flask.helpers import make_response
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError
from flask import Blueprint, request
from datetime import datetime

from app.schemas.usuario_schema import user_schema, users_schema
from app.models.usuario_model import UserModel



UsuarioRouter = Blueprint('usuario', __name__, url_prefix='/usuario')

# Crear usuario con rol definido
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


# Actualizar usuario en específico
@UsuarioRouter.route('/actualizar/<int:id>', methods=['PUT'])
def actualizar_usuario(id):
    j = request.get_json()
    try:
        schema = user_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422
    try:
        user = UserModel.update(actualizado=datetime.now(), **schema).where(UserModel.id==id).execute()
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    user = UserModel.get(id=id)
    return user_schema.dump(user), 202

# Inhabilitar usuario en específico
@UsuarioRouter.route('/eliminar/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    user = UserModel.get_or_none(id=id)
    
    if user is None:
        return {'errors':'usuario no existe'}, 400

    user.delete()
    return user_schema.dump(user)


# Obtener usuario en específico
@UsuarioRouter.route('/get/<int:id>', methods=['GET'])
def obtener_usuario(id):
    user = UserModel.get_or_none(id=id)
    return user_schema.dump(user), 200


# Listado de todos los usuarios
@UsuarioRouter.route('/listado_usuarios', methods=['GET'])
def list_usuarios():
    users = UserModel.select()
    return users_schema.dumps(users),200


@UsuarioRouter.route('/usuarios_inhabilitados', methods=['GET'])
def usu_inhabilitados():
    usuarios = UserModel.select().join(RolModel).where(UserModel.eliminado.is_null(False)) 
    return users_schema.dumps(usuarios),200


# Listado de trabajadores
@UsuarioRouter.route('/listado_empleados', methods=['GET'])
def list_empleados():
    usuarios = UserModel.select().join(RolModel).where(UserModel.rol_id!=1)
    return make_response(users_schema.dumps(usuarios)), 200


# Listado de veterinarios
@UsuarioRouter.route('/listado_veterinarios', methods=['GET'])
def list_veterinarios():
    veterinarios = UserModel.select().join(RolModel).where(UserModel.rol_id==2) & UserModel.select().join(RolModel).where(UserModel.eliminado.is_null(True)) 
    return make_response(users_schema.dumps(veterinarios)), 200


# Listado de clientes
@UsuarioRouter.route('/listado_clientes', methods=['GET'])
def list_clientes():
    duenos = UserModel.select().join(RolModel).where(UserModel.rol_id==1)
    return make_response(users_schema.dumps(duenos)), 200






    
