import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../interfaces/comentarios.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient,
    private servicioAPI: ApiService
  ) { }

  post(comentarios: Comentarios): Observable<any> {
    return this.http.post(this.servicioAPI.getURLcomentarios(), comentarios, { responseType: "text" });
}

}
