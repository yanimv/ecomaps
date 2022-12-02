import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { ApiUtil } from './api-util';

@Injectable({
  providedIn: 'root'
})
export class RecicladoraService {

  url: string = `http://${ApiUtil.IP}:3000/recicladoras`;

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Recicladoras[]>{
    return this.http.get<Recicladoras[]>(this.url);
  }

  public getMaterialesPorRecicladora(idrecicladora: number): Observable<Material[]>{
    return this.http.get<Material[]>(this.url + '/' + idrecicladora + '/materiales');
  }

  public cargarPorMaterial(idmaterial: number[]): Observable<Recicladoras[]>{
    let parametros: HttpParams = new HttpParams();
    idmaterial.forEach(id => {
      parametros = parametros.append('idmaterial', id.toString());
    })
    return this.http.get<Recicladoras[]>(this.url, { params: parametros });
  }

}
