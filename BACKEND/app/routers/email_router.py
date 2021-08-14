from flask import Blueprint, request

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

EmailRouter = Blueprint('email', __name__, url_prefix='/email')

@EmailRouter.route('/enviar', methods=['POST'])
def confirmacion_registro():

    j = request.get_json()

    email = j['email']
    
    #credenciales
    proveedor_correo = 'smtp.live.com: 587'
    remitente = 'VeterinariaADSI2026943@gmail.com'
    password = 'Adsi2026943'

    #conexion a servidor
    servidor = smtplib.SMTP(proveedor_correo)
    servidor.starttls()
    servidor.ehlo()

    #autenticacion
    servidor.login(remitente, password)

    #mensaje 
    mensaje = "<h1>REGISTRO EXITOSO</h1> <h2>Muchas gracias por registrarte, bienvenido a la familia VECO, VETERINARIA CONECTADA</h2>"
    msg = MIMEMultipart()
    msg.attach(MIMEText(mensaje, 'html'))
    msg['From'] = remitente
    msg['To'] = email
    msg['Subject'] = 'REGISTRO EXITOSO: VECO'
    print("Correo enviado con éxito")
    return servidor.sendmail(msg['From'] , msg['To'], msg.as_string())


