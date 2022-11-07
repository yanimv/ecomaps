import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../interfaces/formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url: string = "http://localhost:3000/formulario";

  constructor(
    private http: HttpClient
  ) { }

  post(formulario: Formulario): Observable<any> {
    return this.http.post(this.url, formulario, { responseType: "text" });
}
}
