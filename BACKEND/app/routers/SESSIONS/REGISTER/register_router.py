from app.routers.SESSIONS.USER.user_router import create_user
from flask import Blueprint

RegisterRouter = Blueprint('register', __name__, url_prefix='/register')

@RegisterRouter.route('/', methods=['POST'])
def registration():
    result = create_user()

    return result
    