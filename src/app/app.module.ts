import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LibrosComponent } from './components/libros/libros.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { DivisasLogComponent } from './components/divisas-log/divisas-log.component';
import { PasajesVerComponent } from './components/pasajes-ver/pasajes-ver.component';
import { PasajesFormComponent } from './components/pasajes-form/pasajes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    HeaderComponent,
    FooterComponent,
    LibroFormComponent,
    DivisasComponent,
    DivisasLogComponent,
    PasajesVerComponent,
    PasajesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
