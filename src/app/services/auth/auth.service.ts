import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  BASE_URL = "http://localhost:5000"

  constructor(private http:HttpClient) { }

  login_user(data:any){
    return this.http.post<any>(this.BASE_URL+'/sesion/login', data)
  }

  register_user(data:any){
    return this.http.post<any>(this.BASE_URL+'/sesion/register', data)
  }

  loggediIn(){
    return !!localStorage.getItem('token')
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
