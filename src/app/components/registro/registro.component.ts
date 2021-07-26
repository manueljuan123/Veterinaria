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
      password: ['', Validators.required]
    })
  }

  async submit(){
    let auth = await this.auth.send_register_post_request(this.form.value)
    if (!auth.error){
      this.route.navigate(['/usuario'])
      Swal.fire(auth.message)
    }else{
      Swal.fire(auth.message)
    }
  }

}
