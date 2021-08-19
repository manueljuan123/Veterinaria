import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"

  // Crear usuario con rol definido
  async crear_usuario_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/crear',
                            {method: 'POST',
                             body: JSON.stringify(data),
                             headers:{
                               'Content-Type':'application/json'}})
                            return await response.json()

    }
    catch(error){
      console.log(error)
    }
    return false
  }

  // Actualizar usuario en específico
  async actualizar_usuario_put_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/actualizar',
                                  {method: 'PUT',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json()
    }
    catch(error){
      console.log(error)
    }
    return false
  }

  // Inhabilitar usuario en específico
  async inhabilitar_usuario_delete_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/eliminar',
                                  {method: 'DELETE',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }

    // Obtener usuario en específico
  async obtener_usuario_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/get/<int:id>',
                                  {method: 'GET',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }


  // Listado de todos los usuarios
  async listado_usuarios_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/listado_usuarios',
                                  {method: 'GET',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }


    // Listado de todos los usuarios inhabilitados
  async listado_usuarios_inhabilitados_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/usuarios_inhabilitados',
                                  {method: 'GET',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }


    // Listado de empleados
  async listado_usuarios_empleados_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/listado_empleados',
                                  {method: 'GET',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }


    // Listado de veterinarios
  async listado_veterinarios_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/listado_veterinarios',
                                  {method: 'GET',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }


    // Listado de clientes
  async listado_clientes_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/usuario/listado_clientes',
                                  {method: 'GET',
                                  body: JSON.stringify(data),
                                  headers:{
                                    'Content-Type':'application/json'}})
                                  return await response.json
  }
  catch(error){
    console.log(error)

  }
  return false
  }

}
