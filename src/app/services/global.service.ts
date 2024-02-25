import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model3D } from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private apiRoute: string = "https://inov-test-api.onrender.com/api";
  private readonly modelsRoute: string = this.apiRoute + "/models";

  constructor(private http: HttpClient) { }

  //PING API SERVER
  pingServer(): Observable<string>{
    return this.http.get<string>(`${this.apiRoute}/ping`);
  }

  public getModelsList(): Observable<Model3D[]> {
    return this.http.get<Model3D[]>(this.modelsRoute)
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
