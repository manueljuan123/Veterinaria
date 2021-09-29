import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario : UsuarioI
  formIMG : FormGroup
 
  constructor(private usuariosS:UsuarioService, private fb:FormBuilder, private auth:AuthService) { }
  
  form = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  getUser(){
    let user = this.usuariosS.obtener_usuario_get_request().subscribe(res => {
      this.usuario = res;
      return user
    })
  }


  ngOnInit(): void {

        this.usuariosS.obtener_usuario_get_request().subscribe(res =>{  
          this.usuario = res
          this.form.setValue({
            'nombre': this.usuario.nombre,
            'apellido': this.usuario.apellido,
            'direccion': this.usuario.direccion,
            'celular': this.usuario.celular,
            'email': this.usuario.email
          })
        
        });

        this.formIMG = this.fb.group({
          img: [null]
        })

   }



  actualizarUsuario(){
    this.usuariosS.actualizar_usuario_put_request(this.form.value)
    .subscribe(
      (res:any) => {
        Swal.fire({
          title: "Actualización exitosa",
          text:"Datos actualizados con éxito",
          icon: 'success',
          showConfirmButton : false,
          timer: 3000 
          })
          this.getUser()
          
          
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
        this.formIMG.patchValue({
          img: file
        });
        this.formIMG.get('img').updateValueAndValidity()
        }
      
        onSubmit() {
          if (this.formIMG.valid) {
      
            var formData: any = new FormData();
            formData.append("img", this.formIMG.get('img').value);
      
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

