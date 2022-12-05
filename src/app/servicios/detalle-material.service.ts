import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleMaterial } from '../interfaces/detalleMaterial.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleMaterialService {

  constructor(
    private http: HttpClient,
    private servicioAPI: ApiService
  ) { }

  public get(): Observable<DetalleMaterial[]>{
    return this.http.get<DetalleMaterial[]>(this.servicioAPI.getURLdetalleMaterial());
  }

  public post(detalleMaterial: DetalleMaterial): Observable<any>{
    return this.http.post(this.servicioAPI.getURLdetalleMaterial(), detalleMaterial, {responseType: 'text'});
  }

  public put(detalleMaterial: DetalleMaterial): Observable<any>{
    return this. http.put(this.servicioAPI.getURLdetalleMaterial(), detalleMaterial, {responseType: 'text'});
  }

  public delete(detalleMaterial: DetalleMaterial): Observable<any>{
    return this.http.delete(`${this.servicioAPI.getURLdetalleMaterial()}/${detalleMaterial.idrecicladora}`, {responseType: 'text'});
  }

}
