import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { HistoriaService } from '../../services/historia/historia.service';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { HistoriaI } from 'src/app/models/historia';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { MascotaI } from 'src/app/models/mascota.interface';
import { MascotaService } from '../../services/macota/mascota.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {

  form : FormGroup
  historias: HistoriaI[]
  email: any;

  constructor(private fb:FormBuilder, private mascota:MascotaService,private historia: HistoriaService, private route:Router, private auth:AuthService, private usuario:UsuarioService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      observacion:[''],
      fecha:[''],
      tipo_cita:[''],
      mascota:[''],
      veterinario:[''],
      usuario:[''],
      medicamentos:[''],
      email:['']
    })

    
  }
  async submit(){
    this.historia.crear_historia_post_request(this.form.value, this.email)
    .subscribe(
      (res : any) => {
        this.route.navigate(['vista-veterinario-mis-agendas'])
            Swal.fire({
              title: "Bienvenid@, "+res.nombre+".",
              text:"Gracias por elegir nuestro servicio.",
              icon: 'success',
              showConfirmButton : false,
              timer: 3000 
              })
      },
      err => {
        
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
