import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup

  constructor(private fb:FormBuilder, private auth:AuthService, private route:Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      password: ['', Validators.required],
      confirmation: ['', Validators.required]
    },
    {
      validators: this.MustMatch('password', 'confirmation')
    })
  }

  MustMatch(controlName: string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return 
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null)
      }
    }
  }

  async submit(){
    let auth = await this.auth.send_register_post_request(this.form.value)
    if (!auth.error){
      this.route.navigate(['/usuario'])
      Swal.fire({
        title: auth.message,
        text:"¡Gracias por registrarte!",
        position: 'top-end',
        icon: 'success',
        showConfirmButton : false,
        timer: 3000 
        })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: auth.message,
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Entendido',
        confirmButtonAriaLabel: 'Thumbs up, great!'
        })
    }
  }

}
