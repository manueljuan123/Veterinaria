import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './components-contenedores/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './components-contenedores/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './components-contenedores/contenedor-citas/contenedor-citas.component';
import { ContenedorVeterinarioComponent } from './components-contenedores/contenedor-veterinario/contenedor-veterinario.component';


const routes: Routes = [
  {path: '', component: ContenedorHomeComponent},
  {path: 'registro', component: ContenedorRegistroComponent},
  {path: 'citas', component: ContenedorCitasComponent},
  {path: 'veterinario', component: ContenedorVeterinarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
