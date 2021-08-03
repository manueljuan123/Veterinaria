# importaciones instaladas o de terceros
from flask import Blueprint, request
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError
# importaciones propias
from app.models.usuario_model import UserModel
from app.models.rol_model import RolModel
from app.schemas.usuario_schema import user_schema

UserRouter = Blueprint('user', __name__, url_prefix='/user')

@UserRouter.route('/create', methods=['POST'])
def create_user():
    rol = request.args.get('rol', default=1)
    j = request.get_json()
    try:
        schema = user_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422
    try:
        user = UserModel.create(rol_id=rol, **schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    user = UserModel.select(UserModel, RolModel).join(RolModel).where(UserModel.email == user.email).get()

    return user_schema.dump(user), 201


"""
def list_users():
    users = UserModel.select()
    return users_schema.dumps(users), 200


@UserRouter.route('/get/<int:id>', methods=['GET'])
def get_user(id):
    user = UserModel.get_or_none(id=id)
    return user_schema.dump(user), 200


@UserRouter.route('/create', methods=['POST'])
def create_user():
    j = request.get_json()
    try:
        schema = user_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    try:
        user = UserModel.create(**schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    return user_schema.dump(user), 201


@UserRouter.route('/update/<int:id>', methods=['PUT'])
def update_user(id):
    j = request.get_json()
    try:
        schema = user_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422
    try:
        user = UserModel.update(update_at=datetime.now(), **schema).where(UserModel.id_usuario==id).execute()
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    user = UserModel.get(id=id)
    return user_schema.dump(user), 202


@UserRouter.route('/delete/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = UserModel.get_or_none(id=id)
    
    if user is None:
        return {'errors':'usuario no existe'}, 400

    user.delete()
    return user_schema.dump(user)
"""