import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {
      title: "Acerca de",
      label: "experiencia",
      url: "/#experiencia",
    },
    {
      title: "Sobre nosotros",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:miduga@gmail.com",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
