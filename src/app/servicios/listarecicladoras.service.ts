import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ListarecicladorasService {

  constructor(
    private http: HttpClient,
    private servicioAPI: ApiService
  ) { }

  public get(): Observable<Recicladoras[]>{
    return this.http.get<Recicladoras[]>(this.servicioAPI.getURLlistarecicladoras());
  }

  public post(recicladora: Recicladoras): Observable<any>{
    return this.http.post(this.servicioAPI.getURLlistarecicladoras(), recicladora, {responseType: 'text'});
  }

  public put(recicladora: Recicladoras): Observable<any>{
    return this. http.put(this.servicioAPI.getURLlistarecicladoras(), recicladora, {responseType: 'text'});
  }

  public delete(recicladora: Recicladoras): Observable<any>{
    return this.http.delete(`${this.servicioAPI.getURLlistarecicladoras()}/${recicladora.idrecicladora}`, {responseType: 'text'});
  }

}
