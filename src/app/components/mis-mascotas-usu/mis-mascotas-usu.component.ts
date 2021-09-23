import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/macota/mascota.service';
import { AuthService } from '../../services/auth/auth.service';
import { MascotaI, TipoMascota } from 'src/app/models/mascota.interface';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioI } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-mis-mascotas-usu',
  templateUrl: './mis-mascotas-usu.component.html',
  styleUrls: ['./mis-mascotas-usu.component.css']
})
export class MisMascotasUsuComponent implements OnInit {

  mascotas : MascotaI[]
  tipo_mascotaI : TipoMascota[]
  usuarios : UsuarioI[]
  form : FormGroup;

  constructor(private mascotaService:MascotaService, private auth:AuthService, private route:Router) { }
  

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      raza: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      estado_salud: new FormControl('', [Validators.required]),
      tipo_mascota: new FormControl('', [Validators.required]),
    })

    this.mascotaService.listado_mascotas_usuario_get_request().subscribe(res =>
      this.mascotas = res)
  }

  async submit(){
    (await this.mascotaService.crear_mascota_post_request(this.form.value))
    .subscribe( 
      (res:any) => {
            Swal.fire({
              title: "Éxito",
              text:"Mascota creada con satisfacción",
              icon: 'success',
              showConfirmButton : false,
              timer: 3000 
              })

      }, err => {
        console.log(err)
        console.log(this.form)
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          focusConfirm: false,
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Entendido',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          text: JSON.stringify(err)})
      }
    )
  }
}
