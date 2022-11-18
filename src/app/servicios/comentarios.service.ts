import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../interfaces/comentarios.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url: string = "http://localhost:3000/comentarios";

  constructor(
    private http: HttpClient
  ) { }

  post(comentarios: Comentarios): Observable<any> {
    return this.http.post(this.url, comentarios, { responseType: "text" });
}

}
