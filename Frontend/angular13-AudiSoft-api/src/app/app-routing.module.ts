import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ProfesorsComponent} from './profesors/profesors.component';
import {EstudiantesComponent} from './estudiantes/estudiantes.component';
import { NotasComponent } from './notas/notas.component';

//ajuste menu
const routes: Routes = [
  { path: '', redirectTo: '/notas', pathMatch: 'full' },
  {path:'notas',component:NotasComponent},
  {path:'profesors',component:ProfesorsComponent},
  {path:'estudiantes',component:EstudiantesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
