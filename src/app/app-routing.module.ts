import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './components-contenedores/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './components-contenedores/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './components-contenedores/contenedor-citas/contenedor-citas.component';
import { CitasComponent } from './components-contenedores/citas/citas.component';


const routes: Routes = [
  {path: '', component: ContenedorHomeComponent},
  {path: 'registro', component: ContenedorRegistroComponent},
  {path: 'citas', component: ContenedorCitasComponent},
  {path: 'citas', component: CitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
