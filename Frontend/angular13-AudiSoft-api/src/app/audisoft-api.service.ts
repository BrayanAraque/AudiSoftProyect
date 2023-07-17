import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AudisoftApiService {

  readonly audisoftAPIUrl ="https://localhost:7125/api";

  constructor(private http:HttpClient) { }

  getNotaList():Observable<any[]> {
    return this.http.get<any>(this.audisoftAPIUrl + '/Notas');
  }

  addNota(data:any){
    return this.http.post(this.audisoftAPIUrl + '/Notas', data);
  }
  updateNota(id:number|string, data:any) {
    return this.http.put(this.audisoftAPIUrl + `/Notas/${id}`, data);
  }

  deleteNota(id: number | string) {
    return this.http.delete(this.audisoftAPIUrl + `/Notas/${id}`);
  }

  //Estudiantes

  getEstudiantesList():Observable<any[]> {
    return this.http.get<any>(this.audisoftAPIUrl + `/Estudiantes`);
  }

  addEstudiantes(data:any){
    return this.http.post(this.audisoftAPIUrl + `/Estudiantes`, data);
  }
  updateEstudiantes(id:number|string, data:any) {
    return this.http.put(this.audisoftAPIUrl + `/Estudiantes/${id}`, data);
  }

  deleteEstudiantes(id: number | string) {
    return this.http.delete(this.audisoftAPIUrl + `/Estudiantes/${id}`);
  }

  //Profesores
  getProfesoresList():Observable<any[]> {
    return this.http.get<any>(this.audisoftAPIUrl + `/Profesors`);
  }

  addProfesores(data:any){
    return this.http.post(this.audisoftAPIUrl + `/Profesors`, data);
  }
  updateProfesores(id:number|string, data:any) {
    return this.http.put(this.audisoftAPIUrl + `/Profesors/${id}`, data);
  }

  deleteProfesores(id: number | string) {
    return this.http.delete(this.audisoftAPIUrl + `/Profesors/${id}`);
  }

  //Status

  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.audisoftAPIUrl + `/Status`);
  }

  addStatus(data:any){
    return this.http.post(this.audisoftAPIUrl + `/Status`, data);
  }
  updateStatus(id:number|string, data:any) {
    return this.http.put(this.audisoftAPIUrl + `/Status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.audisoftAPIUrl + `/Status/${id}`);
  }

}



