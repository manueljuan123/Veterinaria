import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './containers/contenedor-citas/contenedor-citas.component';
import { ContenedorVeterinarioComponent } from './containers/contenedor-veterinario/contenedor-veterinario.component';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
import { ContenedorUsuarioComponent } from './containers/contenedor-usuario/contenedor-usuario.component';
import { ContenedorAdminComponent } from './containers/contenedor-admin/contenedor-admin.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { MascotasUsuarioComponent } from './components/mascotas-usuario/mascotas-usuario.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component'
import { GestionCitasComponent } from './components/gestion-citas/gestion-citas.component'
import { GestionVeterinariosComponent } from './components/gestion-veterinarios/gestion-veterinarios.component'
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component'
import { PerfilVeterinarioComponent } from './components/perfil-veterinario/perfil-veterinario.component'
import { CitasVeterinarioComponent } from './components/citas-veterinario/citas-veterinario.component';
import { CitasUsuarioComponent } from './components/citas-usuario/citas-usuario.component';


const routes: Routes = [
  {path: '', component: ContenedorHomeComponent},
  {path: 'info', component: ContenedorInfoComponent},
  {path: 'registro', component: ContenedorRegistroComponent},
  {path: 'citas', component: ContenedorCitasComponent},
  {path: 'veterinario', component: ContenedorVeterinarioComponent},
  {path: 'usuario', component: ContenedorUsuarioComponent},
  {path: 'admin', component: ContenedorAdminComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},
  {path: 'perfil-veterinario', component: PerfilVeterinarioComponent},
  {path: 'mascotas', component: MascotasUsuarioComponent},
  {path: 'veterinarios', component: VeterinariosComponent},
  {path: 'gestion-citas', component: GestionCitasComponent},
  {path: 'gestion-veterinarios', component: GestionVeterinariosComponent},
  {path: 'gestion-usuarios', component: GestionUsuariosComponent},
  {path: 'citas-veterinario', component: CitasVeterinarioComponent},
  {path: 'citas-usuario', component: CitasUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
