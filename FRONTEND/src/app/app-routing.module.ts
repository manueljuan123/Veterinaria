import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
import { VistaInicioComponent } from './containers/contenedor-veterinario/vista-inicio/vista-inicio.component';
import { VistaAgendarmeComponent } from './containers/contenedor-veterinario/vista-agendarme/vista-agendarme.component';
import { VistaCitasPendientesComponent } from './containers/contenedor-veterinario/vista-citas-pendientes/vista-citas-pendientes.component';
import { VistaMisAgendasComponent } from './containers/contenedor-veterinario/vista-mis-agendas/vista-mis-agendas.component';
import { GestionCitasAdminComponent } from './containers/contenedor-admin/gestion-citas-admin/gestion-citas-admin.component';
import { GestionUsuarioAdminComponent } from './containers/contenedor-admin/gestion-usuario-admin/gestion-usuario-admin.component';
import { GestionVeterinariosAdminComponent } from './containers/contenedor-admin/gestion-veterinarios-admin/gestion-veterinarios-admin.component';
import { MascotasComponent } from './containers/contenedor-admin/mascotas/mascotas.component';
import { VistaInicioUsuComponent } from './containers/contenedor-usuario/vista-inicio-usu/vista-inicio-usu.component';
import { VistaAgendarUsuComponent } from './containers/contenedor-usuario/vista-agendar-usu/vista-agendar-usu.component';
import { VistaMisCitasUsuComponent } from './containers/contenedor-usuario/vista-mis-citas-usu/vista-mis-citas-usu.component';
import { VistaMisMascotasUsuComponent } from './containers/contenedor-usuario/vista-mis-mascotas-usu/vista-mis-mascotas-usu.component';
import { VistaVeterinariosUsuComponent } from './containers/contenedor-usuario/vista-veterinarios-usu/vista-veterinarios-usu.component';
import { VistaPerfilUsuComponent } from './containers/contenedor-usuario/vista-perfil-usu/vista-perfil-usu.component';
import { PerfilMascotaComponent } from './components/perfil-mascota/perfil-mascota.component';

//GUARDS
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { PerfilVeterinarioUsuarioComponent } from './components/perfil-veterinario-usuario/perfil-veterinario-usuario.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m=> m.PublicModule) },

  // Vista usuario
  {path: 'vista-inicio-usuario', component: VistaInicioUsuComponent},
  {path: 'vista-agendar-usuario/:id', component: VistaAgendarUsuComponent},
  {path: 'vista-mis-citas-usuario', component: VistaMisCitasUsuComponent},
  {path: 'vista-mis-mascotas-usuario', component: VistaMisMascotasUsuComponent},
  {path: 'vista-editar-mi-mascota/:id', component: PerfilMascotaComponent},
  {path: 'vista-veterinarios-usuario', component: VistaVeterinariosUsuComponent},
  {path: 'vista-detalles-veterinario/:id', component: PerfilVeterinarioUsuarioComponent},
  {path: 'vista-perfil-usuario', component: VistaPerfilUsuComponent},

  // Vista veterinario
  {path: 'vista-veterinario-inicio', component:VistaInicioComponent},
  {path: 'vista-veterinario-agendarme',component:VistaAgendarmeComponent},
  {path: 'vista-veterinario-citas-pendientes', component:VistaCitasPendientesComponent},
  {path: 'vista-veterinario-mis-agendas/:id', component: VistaMisAgendasComponent},

  // Vista Admin
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
