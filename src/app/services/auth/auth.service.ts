import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  BASE_URL = "http://localhost:5000"
  public currentUser:BehaviorSubject<UsuarioI>

  constructor(private http:HttpClient, private router:Router ) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem('token'))
    )
   }

  login_user(data:any){
    return this.http.post<any>(this.BASE_URL+'/sesion/login', data)
  }

  register_user(data:any){
    return this.http.post<any>(this.BASE_URL+'/sesion/register', data)
  }

  loggediIn(){
    return !!localStorage.getItem('token')
  }

  get getUser(): UsuarioI{ 
    return this.currentUser.value;
  }

  cerrar_sesion(){
    localStorage.removeItem('token');
    this.currentUser.next(null)
    
  }

  getToken(){
    return localStorage.getItem('token')
  }



  













  

/* 
  // LOGIN
  async send_login_post_request(data:any){
    try
    {
      var token = 'Bearer' + sessionStorage.getItem('Authorization')
      const response = await fetch(this.BASE_URL+'/sesion/login',
                      {method:'POST',
                       body: JSON.stringify(data),
                       headers: {
                      'Content-Type': 'application/json',
                      'Authorization': token}})
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
*/
}
