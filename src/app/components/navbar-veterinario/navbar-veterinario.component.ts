import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar-veterinario',
  templateUrl: './navbar-veterinario.component.html',
  styleUrls: ['./navbar-veterinario.component.css']
})
export class NavbarVeterinarioComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  async logout(){
    this.auth.cerrar_sesion()
  }

}
