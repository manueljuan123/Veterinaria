import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
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

//GUARDS
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: ContenedorInfoComponent, canActivate: [NoAuthGuard]},
  {path: 'login', component: ContenedorHomeComponent, canActivate: [NoAuthGuard]},
  {path: 'registro', component: ContenedorRegistroComponent, canActivate:[NoAuthGuard]},

  // Vista usuario
  {path: 'usuario', component: ContenedorUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'mascotas', component: MascotasUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'veterinarios', component: VeterinariosComponent, canActivate: [AuthGuard]},
  {path: 'citas-veterinario', component: CitasVeterinarioComponent, canActivate: [AuthGuard]},
  {path: 'citas-usuario', component: CitasUsuarioComponent, canActivate: [AuthGuard]},

  // Vista veterinario
  {path: 'vista-veterinario-inicio', component:VistaInicioComponent, canActivate: [AuthGuard]},
  {path: 'vista-veterinario-agendarme',component:VistaAgendarmeComponent, canActivate: [AuthGuard]},
  {path: 'vista-veterinario-citas-pendientes', component:VistaCitasPendientesComponent, canActivate: [AuthGuard]},
  {path: 'vista-veterinario-mis-agendas', component: VistaMisAgendasComponent, canActivate: [AuthGuard]},

  // Vista Admin
  {path: 'vista-admin-gestion-citas', component:GestionCitasAdminComponent, canActivate: [AuthGuard]},
  {path: 'vista-admin-gestion-usuarios', component:GestionUsuarioAdminComponent, canActivate: [AuthGuard]},
  {path: 'vista-admin-veterinarios', component:GestionVeterinariosAdminComponent, canActivate: [AuthGuard]},
  {path: 'vista-admin-mascotas',component:MascotasComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
