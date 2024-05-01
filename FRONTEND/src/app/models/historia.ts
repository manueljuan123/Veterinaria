export interface HistoriaI {
    actualizado:  Date;
    creado:       Date;
    eliminado:    null;
    fecha:        Date;
    id_historia:  number;
    mascota:      Mascota;
    medicamentos: string;
    observacion:  string;
    tipo_cita:    TipoCita;
    usuario:      Usuario;
    veterinario:  Usuario;
}

interface Mascota {
    edad:         string;
    estado_salud: string;
    genero:       string;
    id_mascota:   number;
    nombre:       string;
    peso:         string;
    raza:         string;
}

interface TipoCita {
    id_tipo_cita: number;
    nombre:       string;
}

interface Usuario {
    apellido: string;
    celular:  string;
    id:       number;
    nombre:   string;
    email:    string;
}