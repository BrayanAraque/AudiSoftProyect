import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudisoftApiService } from 'src/app/audisoft-api.service';


@Component({
  selector: 'app-show-estudiantes',
  templateUrl: './show-estudiantes.component.html',
  styleUrls: ['./show-estudiantes.component.css']
})
export class ShowEstudiantesComponent implements OnInit {

  estudianteList$!:Observable<any[]>;

  constructor(private service:AudisoftApiService) { }

  ngOnInit(): void {
    this.estudianteList$ = this.service.getEstudiantesList();
  }

  //Variables (properties)
  modalTitle:string = '';
  activateAddEditEstudiantesComponent:boolean = false;
  estudiante:any;

  modalAdd() {
    this.estudiante = {
      id:0,
      estudianteName:null

    }
    this.modalTitle = "Add Estudiante";
    this.activateAddEditEstudiantesComponent = true;
  }

  modalEdit(item:any) {
    this.estudiante = item;
    this.modalTitle = "Edit Estudiante";
    this.activateAddEditEstudiantesComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete estudiante ${item.id}`)) {
      this.service.deleteEstudiantes(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById("delete-success-alert");
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = 'none';
        }
      }, 4000);
      this.estudianteList$ = this.service.getEstudiantesList();
      })
    }
  }

  modalClose() {
    this.activateAddEditEstudiantesComponent = false;
    this.estudianteList$ = this.service.getEstudiantesList();
  }
}
