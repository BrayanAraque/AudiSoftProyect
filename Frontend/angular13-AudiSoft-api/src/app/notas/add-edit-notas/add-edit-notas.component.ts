import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudisoftApiService } from 'src/app/audisoft-api.service';

@Component({
  selector: 'app-add-edit-notas',
  templateUrl: './add-edit-notas.component.html',
  styleUrls: ['./add-edit-notas.component.css']
})
export class AddEditNotasComponent implements OnInit {

  notaList$!: Observable<any[]>;
  statusList$!:Observable<any[]>;
  estudiantesList$!:Observable<any[]>;
  profesoresList$!:Observable<any[]>;


  constructor(private service:AudisoftApiService) { }

  @Input() nota:any;
  id: number = 0;
  notaName: string = "";
  status: string = "";
  estudianteId!: number;
  profesorId!: number;

  ngOnInit(): void {
    this.id = this.nota.id;
    this.status = this.nota.status;
    this.notaName = this.nota.notaName;
    this.estudianteId = this.nota.estudianteId;
    this.profesorId = this.nota.profesorId;
    this.statusList$ = this.service.getStatusList();
    this.notaList$ = this.service.getNotaList();
    this.estudiantesList$ = this.service.getEstudiantesList();
    this.profesoresList$ = this.service.getProfesoresList();
  }

  addnota(){
    var nota = {
      status:this.status,
      notaName:this.notaName,
      estudianteId:this.estudianteId,
      profesorId:this.profesorId
    }
    this.service.addNota(nota).subscribe(res =>{
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

  updatenota() {
    var nota = {
      id: this.id,
      status:this.status,
      notaName:this.notaName,
      estudianteId:this.estudianteId,
      profesorId:this.profesorId
    }
    var id:number = this.id;
    this.service.updateNota(id,nota).subscribe(res =>{
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
