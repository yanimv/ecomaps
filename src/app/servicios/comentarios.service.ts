import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../interfaces/comentarios.interface';
import { ApiUtil } from './api-util';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url: string = `http://${ApiUtil.IP}:3000/comentarios`;

  constructor(
    private http: HttpClient
  ) { }

  post(comentarios: Comentarios): Observable<any> {
    return this.http.post(this.url, comentarios, { responseType: "text" });
}

}
