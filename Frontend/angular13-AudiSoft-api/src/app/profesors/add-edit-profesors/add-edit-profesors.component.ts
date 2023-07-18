import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudisoftApiService } from 'src/app/audisoft-api.service';

@Component({
  selector: 'app-add-edit-profesors',
  templateUrl: './add-edit-profesors.component.html',
  styleUrls: ['./add-edit-profesors.component.css']
})
export class AddEditProfesorsComponent implements OnInit {


  profesorList$!: Observable<any[]>;



  constructor(private service:AudisoftApiService) { }

  @Input() profesor:any;
  id: number = 0;
  profesorName: string = "";

  ngOnInit(): void {
    this.id = this.profesor.id;
    this.profesorName = this.profesor.profesorName;
    this.profesorList$ = this.service.getProfesoresList();
  }

  //metodo para agregar profesor
  addProfesor(){
    var profesor = {
      profesorName:this.profesorName
    }

    this.service.addProfesores(profesor).subscribe(res =>{
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

  updateprofesor() {
    var profesor = {
      id: this.id,
      profesorName:this.profesorName

    }
    var id:number = this.id;
    this.service.updateProfesores(id,profesor).subscribe(res =>{
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
