import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recicladoras } from '../interfaces/recicladoras.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarecicladorasService {

  url: string = 'http://localhost:3000/listarecicladoras';

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Recicladoras[]>{
    return this.http.get<Recicladoras[]>(this.url);
  }

}
