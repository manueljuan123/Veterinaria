import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components-contenedores/carousel/carousel.component';
import { LoginComponent } from './components-contenedores/login/login.component';
import { FooterComponent } from './components-contenedores/footer/footer.component';
import { NavbarComponent } from './components-contenedores/navbar/navbar.component';
import { CardsComponent } from './components-contenedores/cards/cards.component';
import { ProductosComponent } from './components-contenedores/productos/productos.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './components-contenedores/registro/registro.component';
import { InfoComponent } from './components-contenedores/info/info.component';
import { ContenedorHomeComponent } from './components-contenedores/contenedor-home/contenedor-home.component';
import { ContenedorRegistroComponent } from './components-contenedores/contenedor-registro/contenedor-registro.component';
import { ContenedorProductosComponent } from './components-contenedores/contenedor-productos/contenedor-productos.component';
import { ContenedorCitasComponent } from './components-contenedores/contenedor-citas/contenedor-citas.component';
import { ContenedorComprarComponent } from './components-contenedores/contenedor-comprar/contenedor-comprar.component';
import { CitasComponent } from './components-contenedores/citas/citas.component';
import { FormularioComponent } from './components-contenedores/formulario/formulario.component';
import { ImagenComponent } from './components-contenedores/imagen/imagen.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    CardsComponent,
    ProductosComponent,
    RegistroComponent,
    InfoComponent,
    ContenedorHomeComponent,
    ContenedorRegistroComponent,
    ContenedorProductosComponent,
    ContenedorCitasComponent,
    ContenedorComprarComponent,
    CitasComponent,
    FormularioComponent,
    ImagenComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
