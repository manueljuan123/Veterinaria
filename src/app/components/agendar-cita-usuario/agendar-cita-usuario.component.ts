import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaI } from 'src/app/models/agenda';
import { AgendaService } from '../../services/agenda/agenda.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MascotaI } from 'src/app/models/mascota.interface';
import { MascotaService } from '../../services/macota/mascota.service';
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

  constructor(private activateRoute:ActivatedRoute, private agendas:AgendaService, private route:Router, private mascotaS:MascotaService) { }

  ngOnInit(): void {
    this.agendas.obtener_tipo_cita_get_request().subscribe(res =>
      this.tipo_citas = res)

    this.mascotaS.listado_mascotas_usuario_get_request().subscribe(res =>
      this.mascotasU = res)

    this.activateRoute.params.subscribe(({id})=>{
      
      if(id != undefined){
        this.agendas.obtener_agenda_get_request(id).subscribe(res =>
          this.agenda = res)
      }
    })

    this.form = new FormGroup({
      motivo : new FormControl('', [Validators.required]),
      mascota_id : new FormControl('', [Validators.required]),
      nombre : new FormControl('', [Validators.required]),
      tipo_cita_id: new FormControl('', [Validators.required])
      
    })

  }

  async actualizarForm(data:AgendaI){
    this.agendas.actualizar_agenda_put_request(this.form.value)
    .subscribe(
      (res:any) => {
        this.route.navigate(['/vista-inicio-usuario'])
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
            text: JSON.stringify(err) })
          })
        }

}
