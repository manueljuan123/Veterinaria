import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from 'src/app/models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"

  // Crear usuario con rol definido
  crear_usuario_post_request(data:any){
    return this.http.post<any>(this.BASE_URL+'/usuario/crear', data)
  }


  // Actualizar usuario en específico
  actualizar_usuario_put_request(data:any){
    return this.http.put<any>(this.BASE_URL+'/usuario/actualizar', data)
  }


  // Inhabilitar usuario en específico
  inhabilitar_usuario_delete_request(data:any, user){
    return this.http.delete<any>(this.BASE_URL+'/usuario/eliminar'+user, data)
  }


    // Obtener usuario en específico
  obtener_usuario_get_request(id?:any):Observable<UsuarioI[]>{
    let ruta = this.BASE_URL+'/usuario/get/'+id
    return this.http.get<UsuarioI[]>(ruta)
  }

  // Listado de todos los usuarios
  listado_usuarios_get_request():Observable<UsuarioI[]>{
    let ruta = this.BASE_URL + "/usuario/listado_usuarios"
    return this.http.get<UsuarioI[]>(ruta)
  }

    // Listado de todos los usuarios inhabilitados
  listado_usuarios_inhabilitados_get_request(data:any){
    return this.http.get<any>(this.BASE_URL+'/usuario/usuarios_inhabilitados', data)
  }

    // Listado de empleados
  listado_usuarios_empleados_get_request(data:any){
    return this.http.get<any>(this.BASE_URL+'/usuario/listado_empleados')
  }

    // Listado de veterinarios
  listado_veterinarios_get_request():Observable<UsuarioI[]>{
    let ruta = this.BASE_URL + "/usuario/listado_veterinarios"
    return this.http.get<UsuarioI[]>(ruta)
  }

    // Listado de clientes
  listado_clientes_get_request(data:any){
    return this.http.get<any>(this.BASE_URL+'/usuario/listado_clientes')
  }


}
