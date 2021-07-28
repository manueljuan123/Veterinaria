import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup
  id: string;
  response: ''

  constructor(private fb:FormBuilder, private auth: AuthService, private route: Router) { }


  ngOnInit(): void {

    //this.id = this.route.snapshot.paramMap.get('id');

    this.form = this.fb.group({
    email:'',
    password:''
  })
  }
  async submit(){
    let auth = await this.auth.send_login_post_request(this.form.value)
    if (!auth.error) {
      this.route.navigate(['/usuario'])
      Swal.fire({
        title: "Bienvenido nuevamente,",
        text:auth.message,
        position: 'top-end',
        icon: 'success',
        showConfirmButton : false,
        timer: 2000 
        })

    }else{
      Swal.fire({
        icon: 'error',
        title: 'E-mail o contraseña incorrectos',
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Entendido',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        text: auth.message})
    }

    if(auth.any){
      this.route.navigate(['/veterinario'])
    }
    
  }

}
