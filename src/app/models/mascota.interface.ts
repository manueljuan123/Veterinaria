export interface MascotaI {
    raza:         string;
    usuario_id:   Usuario;
    eliminado:    Date;
    peso:         number;
    estado_salud: string;
    id_mascota:   number;
    genero:       string;
    edad:         number;
    nombre:       string;
    tipo_mascota: TipoMascota;
}

interface TipoMascota {
    id_tipo_mascota: number;
    tipo_mascota:    string;
}

interface Usuario{
    id:          number;
    nombre:      string;
    apellido:    string;
    celular:     string;
}