import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"


  async send_login_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/login/',
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

  async send_register_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/register/',
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
