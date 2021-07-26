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

// Containers
import { ContenedorHomeComponent } from './containers/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './containers/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './containers/contenedor-citas/contenedor-citas.component';
import { ContenedorVeterinarioComponent } from './containers/contenedor-veterinario/contenedor-veterinario.component';
import { ContenedorInfoComponent } from './containers/contenedor-info/contenedor-info.component';
import { ContenedorUsuarioComponent } from './containers/contenedor-usuario/contenedor-usuario.component';




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
    ContenedorVeterinarioComponent,
    ContenedorInfoComponent,
    ContenedorUsuarioComponent

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
