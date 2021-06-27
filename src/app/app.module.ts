import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components-contenedores/carousel/carousel.component';
import { LoginComponent } from './components-contenedores/login/login.component';
import { FooterComponent } from './components-contenedores/footer/footer.component';
import { NavbarComponent } from './components-contenedores/navbar/navbar.component';
import { CardsComponent } from './components-contenedores/cards/cards.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './components-contenedores/registro/registro.component';
import { InfoComponent } from './components-contenedores/info/info.component';
import { ContenedorHomeComponent } from './components-contenedores/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './components-contenedores/contenedor-registro/contenedor-registro.component';
import { ContenedorCitasComponent } from './components-contenedores/contenedor-citas/contenedor-citas.component';
import { CitasComponent } from './components-contenedores/citas/citas.component';
import { FormularioComponent } from './components-contenedores/formulario/formulario.component';
import { ImagenComponent } from './components-contenedores/imagen/imagen.component';
import { ContenedorVeterinarioComponent } from './components-contenedores/contenedor-veterinario/contenedor-veterinario.component';
import { VeterinarioTablaComponent } from './components-contenedores/veterinario-tabla/veterinario-tabla.component';




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
    ContenedorHomeComponent,
    ContenedorRegistroComponent,
    ContenedorCitasComponent,
    CitasComponent,
    FormularioComponent,
    ImagenComponent,
    ContenedorVeterinarioComponent,
    VeterinarioTablaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
