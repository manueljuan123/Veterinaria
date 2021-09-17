import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/macota/mascota.service';
import { AuthService } from '../../services/auth/auth.service';
import { MascotaI, TipoMascota } from 'src/app/models/mascota.interface';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  tipo_mascota : TipoMascota[]
  usuarios : UsuarioI[]
  form : FormGroup;

  constructor(private mascotaService:MascotaService, private auth:AuthService, private fb:FormBuilder, private route:Router) { }
  
  userId = this.auth.getId()

  ngOnInit() {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      genero:['', Validators.required],
      edad:['', Validators.required],
      raza:['', Validators.required],
      peso:['', Validators.required ],
      estado_salud:['', Validators.required ],
      tipo_mascota:['', Validators.required],
      id_usuario:['']
    })

    this.mascotaService.listado_mascotas_usuario_get_request(this.userId).subscribe(res =>
      this.mascotas = res)


    this.mascotaService.listado_all_tipo_mascotas_get_request().subscribe(res=>
      this.tipo_mascota = res)
  }

  async submit(){
    (await this.mascotaService.crear_mascota_post_request(this.form.value))
    .subscribe( 
      (res:any) => {
            Swal.fire({
              title: "Éxito",
              text:"Macota creada con satisfacción",
              icon: 'success',
              showConfirmButton : false,
              timer: 3000 
              })
              this.form.reset()
              this.route.navigate(['/vista-mis-mascotas-usuario'])

      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          focusConfirm: false,
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Entendido',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          text: err})
      }
    )
  }
}
