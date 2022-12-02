import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { ApiUtil } from './api-util';

@Injectable({
  providedIn: 'root'
})
export class ListarecicladorasService {

  url: string = `http://${ApiUtil.IP}:3000/listarecicladoras`;

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Recicladoras[]>{
    return this.http.get<Recicladoras[]>(this.url);
  }

  public post(recicladora: Recicladoras): Observable<any>{
    return this.http.post(this.url, recicladora, {responseType: 'text'});
  }

  public put(recicladora: Recicladoras): Observable<any>{
    return this. http.put(this.url, recicladora, {responseType: 'text'});
  }

  public delete(recicladora: Recicladoras): Observable<any>{
    return this.http.delete(`${this.url}/${recicladora.idrecicladora}`, {responseType: 'text'});
  }

}
