from flask import g
from flask_cors import CORS


from app.main import create_app
from config.settings import Config
from app.models import database

# ROUTES
# Normal USER
from app.routers.usuario.usuario_router import UserRouter
from app.routers.sesion_router import SesionRouter
from app.routers.mascota_router import MascotaRouter

# Admin
from app.routers.admin.vista_admin_router import AdminRouter

# Citas
from app.routers.cita_router import CitaRouter
from app.routers.historia_router import HistoriaRouter

app = create_app(Config)


CORS(app=app, resources={r"*": {"origins": "*"}})

# USER BLUEPRINTS
app.register_blueprint(UserRouter)
app.register_blueprint(MascotaRouter)

# ADMIN BLUEPRINTS
app.register_blueprint(AdminRouter)

# SESSION BLUEPRINTS
app.register_blueprint(SesionRouter)
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