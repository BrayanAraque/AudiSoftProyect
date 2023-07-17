import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { ShowNotasComponent } from './notas/show-notas/show-notas.component';
import { AddEditNotasComponent } from './notas/add-edit-notas/add-edit-notas.component';
import { AudisoftApiService } from './audisoft-api.service';
import { ProfesorsComponent } from './profesors/profesors.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEditProfesorsComponent } from './profesors/add-edit-profesors/add-edit-profesors.component';
import { ShowProfesorsComponent } from './profesors/show-profesors/show-profesors.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ShowEstudiantesComponent } from './estudiantes/show-estudiantes/show-estudiantes.component';
import { AddEditEstudiantesComponent } from './estudiantes/add-edit-estudiantes/add-edit-estudiantes.component';


@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    ShowNotasComponent,
    AddEditNotasComponent,
    ProfesorsComponent,
    AddEditProfesorsComponent,
    ShowProfesorsComponent,
    EstudiantesComponent,
    ShowEstudiantesComponent,
    AddEditEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AudisoftApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
