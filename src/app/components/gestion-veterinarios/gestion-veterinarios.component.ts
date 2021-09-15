import { Component, OnInit } from '@angular/core';
import { AgendaI } from 'src/app/models/agenda';
import { AuthService } from '../../services/auth/auth.service';
import { AgendaService } from '../../services/agenda/agenda.service';

@Component({
  selector: 'app-gestion-veterinarios',
  templateUrl: './gestion-veterinarios.component.html',
  styleUrls: ['./gestion-veterinarios.component.css']
})
export class GestionVeterinariosComponent implements OnInit {

  agendas: AgendaI[]

  constructor(private auth:AuthService, private agendaService:AgendaService) { }

  vetId = this.auth.getId()

  ngOnInit(): void {
    this.agendaService.obtener_agendas_veterinario_get_request(this.vetId).subscribe(res =>
      this.agendas = res)
    }
  }


