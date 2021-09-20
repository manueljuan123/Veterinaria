import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendaI } from 'src/app/models/agenda';
import { AgendaService } from '../../services/agenda/agenda.service';
import { FormGroup, FormBuilder, RequiredValidator, FormControl, Validators } from '@angular/forms';
import { MascotaI } from 'src/app/models/mascota.interface';
import { MascotaService } from '../../services/macota/mascota.service';
import { CitaService } from '../../services/cita/cita.service';
import Swal from 'sweetalert2';
import { TipoCitaI } from '../../models/tipo_cita.interface';

const date: Date = new Date();
@Component({
  selector: 'app-agendar-cita-usuario',
  templateUrl: './agendar-cita-usuario.component.html',
  styleUrls: ['./agendar-cita-usuario.component.css']
})

export class AgendarCitaUsuarioComponent implements OnInit {

  agenda:AgendaI
  mascotasU: MascotaI[]
  tipo_citas: TipoCitaI[]
  form:FormGroup

  constructor(private citas:CitaService,private activateRoute:ActivatedRoute, private agendas:AgendaService, private fb:FormBuilder, private mascotaS:MascotaService) { }

  ngOnInit(): void {
    this.citas.obtener_tipo_cita_get_request().subscribe(res =>
      this.tipo_citas = res)

    this.mascotaS.listado_mascotas_usuario_get_request().subscribe(res =>
      this.mascotasU = res)

    this.activateRoute.params.subscribe(({id})=>{
      
      if(id != undefined){
        this.agendas.obtener_agenda_get_request(id).subscribe(res =>
          this.agenda = res)
      }
    })

    this.form = this.fb.group({
      motivo : new FormControl('', [Validators.required]),
      paciente_id : new FormControl('', [Validators.required]),
      agenda_id : new FormControl('', [Validators.required])
      
    })

  }

  async submit(){
    this.citas.crear_cita_post_request(this.form.value)
    .subscribe(
      (res:any) => {
        Swal.fire({
            title: "Tu agenda ha sido agendada, no faltes.",
            text:"Muchas gracias por elegirnos",
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
          })
        }

}
