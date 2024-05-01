import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda/agenda.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgendaI } from 'src/app/models/agenda';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veterinario-tabla',
  templateUrl: './veterinario-tabla.component.html',
  styleUrls: ['./veterinario-tabla.component.css']
})
export class VeterinarioTablaComponent implements OnInit {

  form:FormGroup
  agendas: AgendaI[]
  

  constructor(private agendaS:AgendaService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre : new FormControl('', [Validators.required]),
      fecha_inicio : new FormControl('', [Validators.required]),
      fecha_final : new FormControl('', [Validators.required])
      
    })

    this.agendaS.obtener_agendas_veterinario_get_request().subscribe(res =>
      this.agendas = res)
  }

  getAgendas(){
    let agendas = this.agendaS.obtener_agendas_veterinario_get_request().subscribe(res =>{
      this.agendas = res;
      return agendas})
  }

  cancelarAgenda(id): void {
    Swal.fire({
      title: 'Cancelar agenda',
      text: "Esta acción no podrá ser revertida.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, finalizar.'
    }).then((result) => {
      if (result.isConfirmed) {
        this.agendaS.agendar_cita_delete_request(id).subscribe(
          (res:any) => {
            Swal.fire(
              '¡Finalizado!',
              'Tu agenda ha sido cancelado',
              'success'
            )
          },
        )
        
      }
      this.getAgendas()
    })
  , err => {
    console.log(err)
  }

}

  
  async submit(){
    this.agendaS.crear_agenda_post_request(this.form.value)
    .subscribe(
      (res:any) => {
        Swal.fire({
            title: "Tu agenda ha sido creada.",
            text:"Espera por favor a tus clientes.",
            icon: 'success',
            showConfirmButton : false,
            timer: 3000 
            })
            this.getAgendas()
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            focusConfirm: false,
            confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Entendido',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            text: JSON.stringify(err)})
          })
        }

    

}
