from app.models.rol_model import RolModel
from flask.helpers import make_response
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError
from flask import Blueprint, request

from app.schemas.usuario_schema import user_schema, users_schema
from app.models.usuario_model import UserModel

DuenosRouter = Blueprint('duenos', __name__, url_prefix='/duenos')

@DuenosRouter.route('/listado', methods=['GET'])
def listado_duenos():
    duenos = UserModel.select().join(RolModel).where(UserModel.rol_id==1)
    return make_response(users_schema.dumps(duenos)), 200