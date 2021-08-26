import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
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
import { VistaInicioUsuComponent } from './containers/contenedor-usuario/vista-inicio-usu/vista-inicio-usu.component';
import { VistaServiciosUsuComponent } from './containers/contenedor-usuario/vista-servicios-usu/vista-servicios-usu.component';
import { VistaAgendarUsuComponent } from './containers/contenedor-usuario/vista-agendar-usu/vista-agendar-usu.component';
import { VistaMisCitasUsuComponent } from './containers/contenedor-usuario/vista-mis-citas-usu/vista-mis-citas-usu.component';
import { VistaMisMascotasUsuComponent } from './containers/contenedor-usuario/vista-mis-mascotas-usu/vista-mis-mascotas-usu.component';
import { VistaVeterinariosUsuComponent } from './containers/contenedor-usuario/vista-veterinarios-usu/vista-veterinarios-usu.component';
import { VistaPerfilUsuComponent } from './containers/contenedor-usuario/vista-perfil-usu/vista-perfil-usu.component';


const routes: Routes = [
  {path: '', component: ContenedorInfoComponent, canActivate: [NoAuthGuard]},
  {path: 'login', component: ContenedorHomeComponent, canActivate: [NoAuthGuard]},
  {path: 'registro', component: ContenedorRegistroComponent, canActivate:[NoAuthGuard]},

  // Vista usuario
  {path: 'vista-inicio-usuario', component: VistaInicioUsuComponent},
  {path: 'vista-servicios-usuario',component: VistaServiciosUsuComponent},
  {path: 'vista-agendar-usuario', component: VistaAgendarUsuComponent},
  {path: 'vista-mis-citas-usuario', component: VistaMisCitasUsuComponent},
  {path: 'vista-mis-mascotas-usuario', component: VistaMisMascotasUsuComponent},
  {path: 'vista-veterinarios-usuario', component: VistaVeterinariosUsuComponent},
  {path: 'vista-perfil-usuario', component: VistaPerfilUsuComponent},

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
