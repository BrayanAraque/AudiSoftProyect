import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudisoftApiService } from 'src/app/audisoft-api.service';


@Component({
  selector: 'app-show-profesors',
  templateUrl: './show-profesors.component.html',
  styleUrls: ['./show-profesors.component.css']
})
export class ShowProfesorsComponent implements OnInit {


  profesorList$!:Observable<any[]>;

  constructor(private service:AudisoftApiService) { }

  ngOnInit(): void {
    this.profesorList$ = this.service.getProfesoresList();
  }

  //Variables (properties)
  modalTitle:string = '';
  activateAddEditProfesorsComponent:boolean = false;
  profesor:any;

  modalAdd() {
    this.profesor = {
      id:0,
      profesorName:null

    }
    this.modalTitle = "Add Profesor";
    this.activateAddEditProfesorsComponent = true;
  }

  modalEdit(item:any) {
    this.profesor = item;
    this.modalTitle = "Edit Profesor";
    this.activateAddEditProfesorsComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete profesor ${item.id}`)) {
      this.service.deleteProfesores(item.id).subscribe(res => {
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
      this.profesorList$ = this.service.getProfesoresList();
      })
    }
  }

  modalClose() {
    this.activateAddEditProfesorsComponent = false;
    this.profesorList$ = this.service.getProfesoresList();
  }

}
