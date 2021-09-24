import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

import { UsuarioI } from 'src/app/models/usuario.interface'
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {


  usuarios : UsuarioI[];
  form : FormGroup;

  
  constructor(private fb:FormBuilder,private usuarioService:UsuarioService, private auth:AuthService, private route:Router) { }
  


  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl ('', [Validators.required]),
      apellido: new FormControl ('', [Validators.required]),
      celular: new FormControl ('', [Validators.required]),
      direccion: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
    })
    
    this.usuarioService.listado_usuarios_get_request().subscribe(res =>{
      this.usuarios = res;
    })
  
  }

  async submit(){
    this.usuarioService.crear_usuario_post_request(this.form.value)
    .subscribe(
      (res:any) => {
        this.route.navigate(['/vista-admin-gestion-usuarios'])
            Swal.fire({
              title: "Éxito",
              text:"Veterinario creado con satisfacción",
              icon: 'success',
              showConfirmButton : false,
              timer: 3000 
              })

      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          focusConfirm: false,
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Entendido',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          text: "ERROR"})
      }
    )
  }

}
