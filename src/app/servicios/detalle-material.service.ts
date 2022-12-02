import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleMaterial } from '../interfaces/detalleMaterial.interface';
import { ApiUtil } from './api-util';

@Injectable({
  providedIn: 'root'
})
export class DetalleMaterialService {

  url: string = `http://${ApiUtil.IP}:3000/detalleMaterial`;

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<DetalleMaterial[]>{
    return this.http.get<DetalleMaterial[]>(this.url);
  }

  public post(detalleMaterial: DetalleMaterial): Observable<any>{
    return this.http.post(this.url, detalleMaterial, {responseType: 'text'});
  }

  public put(detalleMaterial: DetalleMaterial): Observable<any>{
    return this. http.put(this.url, detalleMaterial, {responseType: 'text'});
  }

  public delete(detalleMaterial: DetalleMaterial): Observable<any>{
    return this.http.delete(`${this.url}/${detalleMaterial.idrecicladora}`, {responseType: 'text'});
  }

}
