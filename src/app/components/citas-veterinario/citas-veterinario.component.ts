import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private agendas:AgendaService, private auth:AuthService, private route:Router) { }


  ngOnInit(): void {
    this.agendas.obtener_agendas_veterinario_get_request().subscribe(res =>
      this.agendasPendientes = res)
  }

  pushHistorio(id:any){
    this.route.navigate(['vista-veterinario-mis-agendas', id])
  }

}
