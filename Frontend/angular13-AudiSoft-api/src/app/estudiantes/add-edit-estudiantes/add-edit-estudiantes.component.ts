import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudisoftApiService } from 'src/app/audisoft-api.service';

@Component({
  selector: 'app-add-edit-estudiantes',
  templateUrl: './add-edit-estudiantes.component.html',
  styleUrls: ['./add-edit-estudiantes.component.css']
})
export class AddEditEstudiantesComponent implements OnInit {

  estudianteList$!: Observable<any[]>;

  constructor(private service:AudisoftApiService) { }

  @Input() estudiante:any;
  id: number = 0;
  estudianteName: string = "";

  ngOnInit(): void {
    this.id = this.estudiante.id;
    this.estudianteName = this.estudiante.estudianteName;
    this.estudianteList$ = this.service.getEstudiantesList();
  }

  addEstudiante(){
    var estudiante = {
      estudianteName:this.estudianteName
    }

    this.service.addEstudiantes(estudiante).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById("add-success-alert");
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    })
  }

  updateEstudiante() {
    var estudiante = {
      id: this.id,
      estudianteName:this.estudianteName

    }
    var id:number = this.id;
    this.service.updateEstudiantes(id,estudiante).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById("update-success-alert");
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = 'none';
        }
      }, 4000);
    })

  }

}
