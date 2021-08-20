import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private fb:FormBuilder, private auth: AuthService, private route: Router) { }


  ngOnInit(): void {
    this.form = this.fb.group({
    email:['', [Validators.required, Validators.email] ],
    password:['', Validators.required ]
  })
  
  }
  async submit(){ 
    this.auth.login_user(this.form.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.remember_token);
          this.route.navigate(['/usuario'])
          Swal.fire({
            title: "Bienvenid@, "+res.nombre+",",
            text:"gracias por elegirnos",
            position: 'top-end',
            icon: 'success',
            showConfirmButton : false,
            timer: 2000 
            })
          
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'E-mail o contraseña incorrectos',
            focusConfirm: false,
            confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Entendido',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            text: "Lo sentimos, sus credenciales no son correctas. Verifique o regístrese antes de volver a intentarlo"})
        }
          
          
      )
  }
    
  }



