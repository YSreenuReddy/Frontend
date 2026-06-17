import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http: HttpClient) { }

url ="https://localhost:7061/api/home";
  //get student data
  getStudentData(){
    return this.http.get(this.url);
  }

  //post student data
  postStudentData(data:any){
    return this.http.post(this.url,data);
  }

  //update student data
  updateStudentData(data:any,id:number){
    return this.http.put(`${this.url}/${id}`,data);
    //this.url+"/"+id,data
  }
  //delete student data
  deleteStudentData(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
