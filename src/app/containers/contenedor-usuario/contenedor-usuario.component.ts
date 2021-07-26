import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contenedor-usuario',
  templateUrl: './contenedor-usuario.component.html',
  styleUrls: ['./contenedor-usuario.component.css']
})
export class ContenedorUsuarioComponent implements OnInit {

  id: string;
  response: '';

  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {
  }

}
