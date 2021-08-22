import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaI } from 'src/app/models/mascota.interface'

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"

  // Crear mascota con rol definido
  async crear_mascota_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/mascota/crear',
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

  // Actualizar mascota en específico
  async actualizar_mascota_put_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/mascota/actualizar/<int:id>',
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

  // Inhabilitar mascota en específico
  async inhabilitar_mascota_delete_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/mascota/delete/<int:id>',
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

    // Obtener mascota en específico
  async obtener_mascota_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/mascota/get/<int:id>',
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


  // Listado de todas las mascotas
  listado_mascotas_get_request(): Observable<MascotaI[]>{
    let ruta = this.BASE_URL+"/mascota/listado_mascotas"
    return this.http.get<MascotaI[]>(ruta)
  }



    // Obtener mascotas del usuario
  async mascotas_usuario_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/mascota/all/<int:id>',
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


    // Listado por tipo de mascotas
  async listado_tipo_mascotas_get_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/mascota/listado_tipo/<int:id>',
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
