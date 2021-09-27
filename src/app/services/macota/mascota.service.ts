import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaI } from 'src/app/models/mascota.interface'
import { TipoMascota } from 'src/app/models/mascota.interface';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"

  // Crear mascota
  async crear_mascota_post_request(data:any){
    return this.http.post<any>(this.BASE_URL+`/mascota/crear`, data)
  }

  // Actualizar mascota en específico
  actualizar_mascota_put_request(data:any, id?:any): Observable<MascotaI>{
    let ruta = this.BASE_URL+"/mascota/actualizar/"+id
    return this.http.put<MascotaI>(ruta, data)
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
  obtener_mascota_get_request(id?:any): Observable<MascotaI>{
    let ruta = this.BASE_URL+"/mascota/get/"+id
    return this.http.get<MascotaI>(ruta)
    }


  // Listado de todas las mascotas
  listado_mascotas_get_request(): Observable<MascotaI[]>{
    let ruta = this.BASE_URL+"/mascota/listado"
    return this.http.get<MascotaI[]>(ruta)
  }


  // Listado de todas las mascotas del usuario
  listado_mascotas_usuario_get_request(): Observable<MascotaI[]>{
    let ruta = this.BASE_URL+"/mascota/all"
    return this.http.get<MascotaI[]>(ruta)
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

    // Listado tipo mascotas
    listado_all_tipo_mascotas_get_request(): Observable<TipoMascota[]>{
      let ruta = this.BASE_URL+"/mascota/listado_tipo"
      return this.http.get<TipoMascota[]>(ruta)
    }

}
