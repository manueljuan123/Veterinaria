import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './containers/contenedor-citas/contenedor-citas.component';
import { ContenedorVeterinarioComponent } from './containers/contenedor-veterinario/contenedor-veterinario.component';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
import { ContenedorUsuarioComponent } from './containers/contenedor-usuario/contenedor-usuario.component';


const routes: Routes = [
  {path: '', component: ContenedorHomeComponent},
  {path: 'info', component: ContenedorInfoComponent},
  {path: 'registro', component: ContenedorRegistroComponent},
  {path: 'citas', component: ContenedorCitasComponent},
  {path: 'veterinario', component: ContenedorVeterinarioComponent},
  {path: 'usuario', component: ContenedorUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
