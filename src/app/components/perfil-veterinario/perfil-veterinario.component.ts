import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-veterinario',
  templateUrl: './perfil-veterinario.component.html',
  styleUrls: ['./perfil-veterinario.component.css']
})
export class PerfilVeterinarioComponent implements OnInit {

  form: FormGroup;
  veterinario: UsuarioI;
  imagen:any
  

  constructor(private fb:FormBuilder, private veterinariosS:UsuarioService, private auth:AuthService) { }

  ngOnInit(): void {
  this.form = this.fb.group({
    img: [null],
  });

  this.veterinariosS.obtener_usuario_get_request().subscribe(res => 
    this.veterinario = res
  )

 }

 upload(event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({
    img: file
  });
  this.form.get('img').updateValueAndValidity()
  }

  onSubmit() {
    if (this.form.valid) {

      var formData: any = new FormData();
      formData.append("img", this.form.get('img').value);

      this.auth.postRequestSendForm('http://localhost:5000/usuario/uploader', formData).subscribe(
        (response: any) => {
          this.imagen = response.ruta
        },
      (error) => {
   
        console.log(error.status);
      })
 
    } else {
      console.log("Form error");
    }
  }
}

