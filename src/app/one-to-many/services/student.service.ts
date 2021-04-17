import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:7080/student';
  constructor(private httpClient: HttpClient) { }

  save(student: FormGroup){
    return this.httpClient.post(this.url, student.value);
  }

  readAll(){
    return this.httpClient.get<any>(this.url);
  }  

  read(id){
    return this.httpClient.get<any>(this.url + '/' + id);
  }

  delete(id){
    return this.httpClient.delete<any>(this.url + '/' + id);
  }

  update(student: FormGroup){
    return this.httpClient.put(this.url, student.value);
  }
  
}
