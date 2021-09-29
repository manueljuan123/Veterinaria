import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


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




  formVet = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.veterinariosS.obtener_usuario_get_request().subscribe(res => {
      this.veterinario = res;
      this.formVet.setValue({
        'nombre': this.veterinario.nombre,
        'apellido': this.veterinario.apellido,
        'direccion': this.veterinario.direccion,
        'celular': this.veterinario.celular,
        'email': this.veterinario.email
      })
    });

    this.form = this.fb.group({
      img: [null]
    })

 }

 getVet(){
      let vet = this.veterinariosS.obtener_usuario_get_request().subscribe(res => {
        this.veterinario = res;
        return vet})
}

 actualizarVeterinario(){
  this.veterinariosS.actualizar_usuario_put_request(this.formVet.value)
  .subscribe(
    (res:any) => {
      Swal.fire({
        title: "Actualización exitosa",
        text:"Datos actualizados con éxito",
        icon: 'success',
        showConfirmButton : false,
        timer: 3000 
        })
        this.getVet()
        
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Entendido',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        text: JSON.stringify(err) })
      })
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
        },
      (error) => {
        console.log(error.status);
      })
 
    } else {
      console.log("Form error");
    }
  }
}

