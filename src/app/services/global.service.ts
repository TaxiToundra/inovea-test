import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private apiRoute = "https://inov-test-api.onrender.com/api";

  constructor(private http: HttpClient) { }

  //PING API SERVER
  pingServer(): Observable<string>{
    return this.http.get<string>(`${this.apiRoute}/ping`);
  }

  //ADD GET LIST
  getList() {
  }

  //ADD GET MODEL BY ID
  getModelById() {
  }

   //ADD POST REQUEST
  createModel() {

  }

  //ADD PUT REQUEST
  updateModel(){
  }

  //ADD DELETE REQUEST
  deleteModel() {
  }
}
