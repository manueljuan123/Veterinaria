import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/macota/mascota.service';
import { AuthService } from '../../services/auth/auth.service';
import { MascotaI, TipoMascota } from 'src/app/models/mascota.interface';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioI } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-mis-mascotas-usu',
  templateUrl: './mis-mascotas-usu.component.html',
  styleUrls: ['./mis-mascotas-usu.component.css']
})
export class MisMascotasUsuComponent implements OnInit {

  mascotas : MascotaI[]
  mascotaU : MascotaI
  tipo_mascotaI : TipoMascota[]
  usuarios : UsuarioI[]
  form : FormGroup;

  constructor(private mascotaService:MascotaService, private activateRoute:ActivatedRoute, private route:Router) { }
  

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      genero: new FormControl(''),
      edad: new FormControl(''),
      raza: new FormControl(''),
      peso: new FormControl(''),
      estado_salud: new FormControl(''),
      tipo_mascota: new FormControl(''),
    })

    this.mascotaService.listado_mascotas_usuario_get_request().subscribe(res =>
      this.mascotas = res)

    this.activateRoute.params.subscribe(({id})=>{
      if(id != undefined){
        this.mascotaService.obtener_mascota_get_request(id).subscribe(res =>
          this.mascotaU = res)
      }
    })  


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

  detalles(id:any){
    this.route.navigate(['/vista-editar-mi-mascota', id])
  }
}
