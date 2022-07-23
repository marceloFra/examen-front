import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { NotasComponent } from './component/notas/notas.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notas',
    pathMatch: 'full',
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: 'alumno',
    component: AlumnoComponent
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
