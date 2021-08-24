// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './services/auth/auth.service';

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
import { NavbarUsuarioComponent } from './components/navbar-usuario/navbar-usuario.component';


// Services

import { TokenInterceptorService } from './services/auth/token-interceptor.service';


// Shared
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator';
import { CardsInicioUsuarioComponent } from './components/cards-inicio-usuario/cards-inicio-usuario.component';
import { CarrouselVistaUsuarioComponent } from './components/carrousel-vista-usuario/carrousel-vista-usuario.component';
import { CardsServiciosUsuarioComponent } from './components/cards-servicios-usuario/cards-servicios-usuario.component';
import { MiniNavComponent } from './components/mini-nav/mini-nav.component';
import { VistaInicioUsuComponent } from './containers/contenedor-usuario/vista-inicio-usu/vista-inicio-usu.component';
import { VistaServiciosUsuComponent } from './containers/contenedor-usuario/vista-servicios-usu/vista-servicios-usu.component';
import { VistaAgendarUsuComponent } from './containers/contenedor-usuario/vista-agendar-usu/vista-agendar-usu.component';
import { VistaMisCitasUsuComponent } from './containers/contenedor-usuario/vista-mis-citas-usu/vista-mis-citas-usu.component';
import { VistaMisMascotasUsuComponent } from './containers/contenedor-usuario/vista-mis-mascotas-usu/vista-mis-mascotas-usu.component';
import { VistaVeterinariosUsuComponent } from './containers/contenedor-usuario/vista-veterinarios-usu/vista-veterinarios-usu.component';
import { VistaPerfilUsuComponent } from './containers/contenedor-usuario/vista-perfil-usu/vista-perfil-usu.component';
import { MisMascotasUsuComponent } from './components/mis-mascotas-usu/mis-mascotas-usu.component';


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
    NavbarUsuarioComponent,
    TablaMascotaAdminComponent,
    ConfirmEqualValidatorDirective,
    CardsInicioUsuarioComponent,
    CarrouselVistaUsuarioComponent,
    CardsServiciosUsuarioComponent,
    MiniNavComponent,
    VistaInicioUsuComponent,
    VistaServiciosUsuComponent,
    VistaAgendarUsuComponent,
    VistaMisCitasUsuComponent,
    VistaMisMascotasUsuComponent,
    VistaVeterinariosUsuComponent,
    VistaPerfilUsuComponent,
    MisMascotasUsuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, /*Authguard*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
