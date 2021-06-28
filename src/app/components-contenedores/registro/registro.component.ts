import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup

  constructor(private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      Nombre: '',
      Apellido: '',
      Email: '',
      Celular: '',
      Direccion: '',
      password: ''
    })
  }

  submit(){
    console.log('submitted')
    console.log(this.form.value)

    this.auth.send_register_post_request(this.form.value).subscribe()
  }

}
