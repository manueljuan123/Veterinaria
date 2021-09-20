import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { HistoriaService } from '../../services/historia/historia.service';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { HistoriaI } from 'src/app/models/historia';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { MascotaI } from 'src/app/models/mascota.interface';
import { MascotaService } from '../../services/macota/mascota.service';
import { CitaI } from 'src/app/models/cita.interface';
import { CitaService } from '../../services/cita/cita.service';
import { AgendaI } from '../../models/agenda';
import { AgendaService } from '../../services/agenda/agenda.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {

  form : FormGroup
  historias: HistoriaI[]
  mascotas: MascotaI[]
  cita: CitaI
  agenda: AgendaI

  constructor(private agendaS:AgendaService, private mascotaS:MascotaService, private activatedRoute:ActivatedRoute, private fb:FormBuilder, private citaS:CitaService, private mascota:MascotaService,private historia: HistoriaService, private route:Router, private auth:AuthService, private usuario:UsuarioService) { }

  

  ngOnInit(): void {

    this.mascotaS.listado_mascotas_usuario_get_request().subscribe(res =>
      this.mascotas = res)

    this.activatedRoute.params.subscribe(({id}) => {
      
      if(id!=undefined){
        this.agendaS.obtener_agenda_get_request(id).subscribe(res =>
          this.agenda = res)
      }
    })



    this.form = this.fb.group({
      observacion:['', Validators.required],
      fecha:['', Validators.required],
      tipo_cita_id:['', Validators.required],
      mascota_id:['', Validators.required],
      veterinario_id:['', Validators.required],
      medicamentos:['', Validators.required],
    })


    
  }
  async submit(){
    this.historia.crear_historia_post_request(this.form.value)
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
