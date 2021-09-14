from flask import Blueprint, request

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

EmailRouter = Blueprint('email', __name__, url_prefix='/email')

# Confirmación de registro
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

# Consulta de un usuario no registrado a la aplicación
@EmailRouter.route('/recibir_consulta', methods=['POST'])
def consulta():

    j = request.get_json()
    consulta = j['consulta']
    email = j['email']
    
    #credenciales
    proveedor_correo = 'smtp.live.com: 587'
    remitente = 'consultaveco@gmail.com'
    password = 'adsi2026943'

    #conexion a servidor
    servidor = smtplib.SMTP(proveedor_correo)
    servidor.starttls()
    servidor.ehlo()

    #autenticacion
    servidor.login(remitente, password)

    #mensaje 
    mensaje = consulta
    msg = MIMEMultipart()
    msg.attach(MIMEText(mensaje, 'html'))
    msg['From'] = remitente
    msg['To'] = 'VeterinariaADSI2026943@gmail.com'
    msg['Subject'] = email
    print("Correo enviado con éxito")
    return servidor.sendmail(msg['From'] , msg['To'], msg.as_string())


# Enviar historias clínicas al cliente
@EmailRouter.route('/enviar_historia', methods=['POST'])
def envio_historia(email):

    j = request.get_json()
    observacion = j['observacion']
    medicamentos = j['medicamentos']
    fecha = j['fecha']
    tipo_cita_id = j['tipo_cita_id']
    mascota_id = j['mascota_id']
    veterinario_id = j['veterinario_id']
    
    
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
    mensaje = f"""
    <html>
        <body>
            Mascota: <i>{mascota_id}</i> <br>
            Veterinario Encargado: <i>{veterinario_id}</i> <br>
            Fecha: <i>{fecha}</i> <br>
            Tipo Cita: <i>{tipo_cita_id}</i> <br>
            Observación: <i>{observacion}</i> <br>
            Medicamentos: <i>{medicamentos}</i> <br>

        </body>
    </html>
    """

    msg = MIMEMultipart()
    msg.attach(MIMEText(mensaje, 'html'))
    msg['From'] = remitente
    msg['To'] = email
    msg['Subject'] = "Historia Clínica VECO "+fecha
    print("Correo enviado con éxito")
    return servidor.sendmail(msg['From'] , msg['To'], msg.as_string())


