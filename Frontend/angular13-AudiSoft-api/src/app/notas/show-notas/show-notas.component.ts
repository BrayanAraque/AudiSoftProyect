import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudisoftApiService } from 'src/app/audisoft-api.service';

@Component({
  selector: 'app-show-notas',
  templateUrl: './show-notas.component.html',
  styleUrls: ['./show-notas.component.css']
})
export class ShowNotasComponent implements OnInit {

  notaList$!:Observable<any[]>;
  estudiantesList$!:Observable<any[]>;
  estudiantesList:any=[];
  profesoresList$!:Observable<any[]>;
  profesoresList:any=[];

  //Map to display data associate with foreing keys
  estudiantesMap:Map<number, string> = new Map();
  profesoresMap:Map<number, string> = new Map();

  constructor(private service:AudisoftApiService) { }

  ngOnInit(): void {
    this.notaList$ = this.service.getNotaList();
    this.estudiantesList$ = this.service.getEstudiantesList();
    this.profesoresList$ = this.service.getProfesoresList();
    this.refreshEstudianteMap();
    this.refreshProfesorMap();
  }

  //Variables (properties)
  modalTitle:string = '';
  activateAddEditNotaComponent:boolean = false;
  nota:any;

  modalAdd() {
    this.nota = {
      id:0,
      notaName:null,
      status:null,
      profesorId:null,
      estudianteId:null

    }
    this.modalTitle = "Add Nota";
    this.activateAddEditNotaComponent = true;
  }

  modalEdit(item:any) {
    this.nota = item;
    this.modalTitle = "Edit Nota";
    this.activateAddEditNotaComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete nota ${item.id}`)) {
      this.service.deleteNota(item.id).subscribe(res => {
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
      this.notaList$ = this.service.getNotaList();
      })
    }
  }

  modalClose() {
    this.activateAddEditNotaComponent = false;
    this.notaList$ = this.service.getNotaList();
  }

  refreshEstudianteMap(){
    this.service.getEstudiantesList().subscribe(data => {
      this.estudiantesList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.estudiantesMap.set(this.estudiantesList[i].id, this.estudiantesList[i].
        estudianteName);
      }
    })
  }

  refreshProfesorMap(){
    this.service.getProfesoresList().subscribe(data => {
      this.profesoresList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.profesoresMap.set(this.profesoresList[i].id, this.profesoresList[i].
        profesorName);
      }
    })
  }
}
