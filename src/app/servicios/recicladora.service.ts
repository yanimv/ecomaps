import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RecicladoraService {

  constructor(
    private http: HttpClient,
    private servicioAPI: ApiService
  ) { }

  public get(): Observable<Recicladoras[]>{
    return this.http.get<Recicladoras[]>(this.servicioAPI.getURLrecicladora());
  }

  public getMaterialesPorRecicladora(idrecicladora: number): Observable<Material[]>{
    return this.http.get<Material[]>(this.servicioAPI.getURLrecicladora() + '/' + idrecicladora + '/materiales');
  }

  public cargarPorMaterial(idmaterial: number[]): Observable<Recicladoras[]>{
    let parametros: HttpParams = new HttpParams();
    idmaterial.forEach(id => {
      parametros = parametros.append('idmaterial', id.toString());
    })
    return this.http.get<Recicladoras[]>(this.servicioAPI.getURLrecicladora(), { params: parametros });
  }

}
