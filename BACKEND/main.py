from flask import g
from flask_cors import CORS


from app.main import create_app
from config.settings import Config
from app.models import database

# ROUTES
# Normal USER
from app.routers.SESSIONS.USER.user_router import UserRouter
from app.routers.SESSIONS.LOGIN.login_router import LoginRouter
from app.routers.SESSIONS.REGISTER.register_router import RegisterRouter

# Vet
from app.routers.SESSIONS.USER_VET.user_vet_router import VeterinarioRouter
from app.routers.SESSIONS.LOGIN_VET.login_vet_router import LoginVeterinarioRouter
from app.routers.SESSIONS.REGISTER_VET.register_vet_router import RegisterVetRouter

# Citas
from app.routers.SESSIONS.CITA.cita_router import CitaRouter

app = create_app(Config)


CORS(app=app, resources={r"*": {"origins": "*"}})

# USER BLUEPRINTS
app.register_blueprint(UserRouter)

# USER_VET BLUEPRINTS
app.register_blueprint(VeterinarioRouter)
app.register_blueprint(LoginVeterinarioRouter)
app.register_blueprint(RegisterVetRouter)

# SESSION BLUEPRINTS
app.register_blueprint(LoginRouter)
app.register_blueprint(RegisterRouter)
app.register_blueprint(CitaRouter)



@app.before_request
def before_request():
    g.db = database
    g.db.connect()


@app.after_request
def after_request(response):
    g.db.close()
    return response


if __name__ == '__main__':
    app.run()