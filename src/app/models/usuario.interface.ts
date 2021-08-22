export interface UsuarioI {
    id:number;
    nombre: string;
    apellido: string;
    email: string;
    celular: string;
    direccion: string;
    rol: Rol;
    eliminado: string;
}

interface Rol{
    id:Number;
    nombre:string;
}
