import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  server_adress_login = "http://localhost:5000/login";
  server_adress_register = "http://localhost:5000/register"


  send_login_post_request(data:any){
    return this.http.post(this.server_adress_login, JSON.stringify(data) )
  }

  send_register_post_request(data:any){
    return this.http.post(this.server_adress_register, JSON.stringify(data))
  }

}


