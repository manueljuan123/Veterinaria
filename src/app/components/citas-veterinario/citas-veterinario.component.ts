import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AgendaI } from '../../models/agenda';
import { AgendaService } from '../../services/agenda/agenda.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-citas-veterinario',
  templateUrl: './citas-veterinario.component.html',
  styleUrls: ['./citas-veterinario.component.css']
})
export class CitasVeterinarioComponent implements OnInit {

  agendasPendientes: AgendaI[]
  agenda: AgendaI

  constructor(private activateRoute:ActivatedRoute, private agendas:AgendaService, private auth:AuthService, private route:Router) { }


  ngOnInit(): void {
    this.agendas.obtener_agendas_veterinario_get_request().subscribe(res =>
      this.agendasPendientes = res)

    
    this.activateRoute.params.subscribe(({id})=>{
      if (id != undefined) {
        this.agendas.obtener_agenda_get_request(id).subscribe(res => 
          this.agenda = res)
      }
    })
  }

  pushHistorio(id:any){
    this.route.navigate(['vista-veterinario-mis-agendas', id])
  }

  getAgendas(){
    let agendas = this.agendas.obtener_agendas_veterinario_get_request().subscribe(res =>
      this.agendasPendientes = res)
      return agendas
  }

  agendarCita(id): void {
        Swal.fire({
          title: 'Cita agendada',
          text: "Esta acción no podrá ser revertida.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, finalizar.'
        }).then((result) => {
          if (result.isConfirmed) {
            this.agendas.agendar_cita_delete_request(id).subscribe(
              (res:any) => {
                Swal.fire(
                  '¡Finalizado!',
                  'Tu agenda ha sido exitosamente finalizada',
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

}
