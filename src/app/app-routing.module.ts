import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { DivisasLogComponent } from './components/divisas-log/divisas-log.component';
import { PasajesVerComponent } from './components/pasajes-ver/pasajes-ver.component';
import { PasajesFormComponent } from './components/pasajes-form/pasajes-form.component';

const routes: Routes = [
  { path: 'libros', component: LibrosComponent },
  { path: '', component: LibrosComponent },
  { path: 'crearLibro', component: LibroFormComponent },
  {path: 'divisas', component: DivisasComponent},
  {path: 'divisasLog', component: DivisasLogComponent},
  {path: 'verPasajes', component: PasajesVerComponent},
  {path: 'cargarPasajes', component: PasajesFormComponent},
  {path: 'editarPasaje/:id', component: PasajesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
