// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { InfoComponent } from './components/info/info.component';
import { CitasComponent } from './components/citas/citas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VeterinarioTablaComponent } from './components/veterinario-tabla/veterinario-tabla.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

// Containers
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './containers/contenedor-citas/contenedor-citas.component';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
import { ContenedorUsuarioComponent } from './containers/contenedor-usuario/contenedor-usuario.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component';
import { SidebarVetComponent } from './components/sidebar-vet/sidebar-vet.component';
import { MascotasUsuarioComponent } from './components/mascotas-usuario/mascotas-usuario.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component';
import { GestionCitasComponent } from './components/gestion-citas/gestion-citas.component';
import { GestionVeterinariosComponent } from './components/gestion-veterinarios/gestion-veterinarios.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { PerfilVeterinarioComponent } from './components/perfil-veterinario/perfil-veterinario.component';
import { CitasVeterinarioComponent } from './components/citas-veterinario/citas-veterinario.component';
import { CitasUsuarioComponent } from './components/citas-usuario/citas-usuario.component';
import { NavbarVeterinarioComponent } from './components/navbar-veterinario/navbar-veterinario.component';
import { CarruselVeterinarioComponent } from './components/carrusel-veterinario/carrusel-veterinario.component';
import { VistaInicioComponent } from './containers/contenedor-veterinario/vista-inicio/vista-inicio.component';
import { VistaAgendarmeComponent } from './containers/contenedor-veterinario/vista-agendarme/vista-agendarme.component';
import { VistaCitasPendientesComponent } from './containers/contenedor-veterinario/vista-citas-pendientes/vista-citas-pendientes.component';
import { VistaMisAgendasComponent } from './containers/contenedor-veterinario/vista-mis-agendas/vista-mis-agendas.component';
import { TableGestionAdminComponent } from './components/table-gestion-admin/table-gestion-admin.component';
import { MascotasComponent } from './containers/contenedor-admin/mascotas/mascotas.component';
import { GestionCitasAdminComponent } from './containers/contenedor-admin/gestion-citas-admin/gestion-citas-admin.component';
import { GestionUsuarioAdminComponent } from './containers/contenedor-admin/gestion-usuario-admin/gestion-usuario-admin.component';
import { GestionVeterinariosAdminComponent } from './containers/contenedor-admin/gestion-veterinarios-admin/gestion-veterinarios-admin.component';
import { TablaMascotaAdminComponent } from './components/tabla-mascota-admin/tabla-mascota-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    CardsComponent,
    RegistroComponent,
    InfoComponent,
    VeterinarioTablaComponent,
    ContenedorHomeComponent,
    ContenedorRegistroComponent,
    ContenedorCitasComponent,
    CitasComponent,
    FormularioComponent,
    ImagenComponent,
    ContenedorInfoComponent,
    ContenedorUsuarioComponent,
    SidebarAdminComponent,
    SidebarUserComponent,
    SidebarVetComponent,
    PerfilUsuarioComponent,
    MascotasUsuarioComponent,
    VeterinariosComponent,
    GestionCitasComponent,
    GestionVeterinariosComponent,
    GestionUsuariosComponent,
    PerfilVeterinarioComponent,
    CitasVeterinarioComponent,
    CitasUsuarioComponent,
    NavbarVeterinarioComponent,
    CarruselVeterinarioComponent,
    VistaInicioComponent,
    VistaAgendarmeComponent,
    VistaCitasPendientesComponent,
    VistaMisAgendasComponent,
    TableGestionAdminComponent,
    MascotasComponent,
    GestionCitasAdminComponent,
    GestionUsuarioAdminComponent,
    GestionVeterinariosAdminComponent,
    TablaMascotaAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
