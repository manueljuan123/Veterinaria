import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './containers/contenedor-citas/contenedor-citas.component';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
import { ContenedorUsuarioComponent } from './containers/contenedor-usuario/contenedor-usuario.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { MascotasUsuarioComponent } from './components/mascotas-usuario/mascotas-usuario.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component'
import { PerfilVeterinarioComponent } from './components/perfil-veterinario/perfil-veterinario.component'
import { CitasVeterinarioComponent } from './components/citas-veterinario/citas-veterinario.component';
import { CitasUsuarioComponent } from './components/citas-usuario/citas-usuario.component';
import { VistaInicioComponent } from './containers/contenedor-veterinario/vista-inicio/vista-inicio.component';
import { VistaAgendarmeComponent } from './containers/contenedor-veterinario/vista-agendarme/vista-agendarme.component';
import { VistaCitasPendientesComponent } from './containers/contenedor-veterinario/vista-citas-pendientes/vista-citas-pendientes.component';
import { VistaMisAgendasComponent } from './containers/contenedor-veterinario/vista-mis-agendas/vista-mis-agendas.component';
import { GestionCitasAdminComponent } from './containers/contenedor-admin/gestion-citas-admin/gestion-citas-admin.component';
import { GestionUsuarioAdminComponent } from './containers/contenedor-admin/gestion-usuario-admin/gestion-usuario-admin.component';
import { GestionVeterinariosAdminComponent } from './containers/contenedor-admin/gestion-veterinarios-admin/gestion-veterinarios-admin.component';
import { MascotasComponent } from './containers/contenedor-admin/mascotas/mascotas.component';


const routes: Routes = [
  {path: 'login', component: ContenedorHomeComponent},
  {path: '', component: ContenedorInfoComponent},
  {path: 'registro', component: ContenedorRegistroComponent},
  {path: 'citas', component: ContenedorCitasComponent},
  {path: 'usuario', component: ContenedorUsuarioComponent},
  {path: 'mascotas', component: MascotasUsuarioComponent},
  {path: 'veterinarios', component: VeterinariosComponent},
  {path: 'citas-veterinario', component: CitasVeterinarioComponent},
  {path: 'citas-usuario', component: CitasUsuarioComponent},

  //vista veterinario
  {path: 'vista-veterinario-inicio', component:VistaInicioComponent},
  {path: 'vista-veterinario-agendarme',component:VistaAgendarmeComponent},
  {path: 'vista-veterinario-citas-pendientes', component:VistaCitasPendientesComponent},
  {path: 'vista-veterinario-mis-agendas', component: VistaMisAgendasComponent},

  //Vista Admin
  {path: 'vista-admin-gestion-citas', component:GestionCitasAdminComponent},
  {path: 'vista-admin-gestion-usuarios', component:GestionUsuarioAdminComponent},
  {path: 'vista-admin-veterinarios', component:GestionVeterinariosAdminComponent},
  {path: 'vista-admin-mascotas',component:MascotasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
