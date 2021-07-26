from app.routers.SESSIONS.USER_VET.user_vet_router import create_vet
from flask import Blueprint

RegisterVetRouter = Blueprint('registerVet', __name__, url_prefix='/registerVet')

@RegisterVetRouter.route('/', methods=['POST'])
def registration():
    result = create_vet()

    return result