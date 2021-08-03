import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"


  // LOGIN
  async send_login_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/sesion/login',
                      {method:'POST',
                       body: JSON.stringify(data),
                       headers: {
                      'Content-Type': 'application/json'}})
                      return await response.json()
    }
                      
    catch(error){
      console.log(error)
    }
    return false

  }

  // REGISTRO
  async send_register_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/sesion/register',
                              {method:'POST',
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

// ENVIAR CITA
  async send_cita_post_request(data:any){
    try
    {
      const response = await fetch(this.BASE_URL+'/cita/create',
                                {method:'POST',
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

}
