import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';
import {
  Model3D,
  Model3DModify
} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiRoute: string = "https://inov-test-api.onrender.com/api";
  private readonly modelsRoute: string = this.apiRoute + "/models";
  private readonly modelsRouteWithId = (id: string) => this.modelsRoute + '/' + id;
  private activeModelSource: Subject<Model3D | null> = new Subject<Model3D | null>();
  public activeModel$ = this.activeModelSource.asObservable();

  constructor(private http: HttpClient) { }

  public pingServer(): Observable<string>{
    return this.http.get<string>(`${this.apiRoute}/ping`);
  }

  public getModelsList(): Observable<Model3D[]> {
    return this.http.get<Model3D[]>(this.modelsRoute)
  }

  public getModelById(id: string): Observable<Model3D> {
    return this.http.get<Model3D>(this.modelsRouteWithId(id));
  }

  public createModel(modelCreate: Model3DModify): Observable<Model3D> {
    return this.http.post<Model3D>(this.modelsRoute, modelCreate);
  }

  public updateModel(updatedModel: Model3D): Observable<Model3D> {
    return this.http.put<Model3D>(this.modelsRouteWithId(updatedModel.id), updatedModel)
  }

  public deleteModel(modelId: string): Observable<Model3D> {
    console.log(this.modelsRouteWithId(modelId))
    return this.http.delete<Model3D>(this.modelsRouteWithId(modelId));
  }

  public setActiveModel(model: Model3D): void {
    this.activeModelSource.next(model);
  }
}
