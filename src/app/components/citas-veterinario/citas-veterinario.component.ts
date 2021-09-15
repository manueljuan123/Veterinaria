import { Component, OnInit } from '@angular/core';
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

  constructor(private agendas:AgendaService, private auth:AuthService) { }

  userId = this.auth.getId()

  ngOnInit(): void {
    this.agendas.obtener_agendas_veterinario_get_request(this.userId).subscribe(res =>
      this.agendasPendientes = res)
  }

}
