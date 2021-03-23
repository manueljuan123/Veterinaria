import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './components-contenedores/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './components-contenedores/contenedor-registro/contenedor-registro.component';
import { ContenedorProductosComponent } from './components-contenedores/contenedor-productos/contenedor-productos.component';
import { ContenedorCitasComponent } from './components-contenedores/contenedor-citas/contenedor-citas.component';
import { ContenedorComprarComponent } from './components-contenedores/contenedor-comprar/contenedor-comprar.component';


const routes: Routes = [
  {path: '', component: ContenedorHomeComponent},
  {path: 'registro', component: ContenedorRegistroComponent},
  {path: 'citas', component: ContenedorCitasComponent},
  {path: 'productos', component: ContenedorProductosComponent},
  {path: 'comprar', component: ContenedorComprarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
