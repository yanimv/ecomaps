import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';
import { Recicladora } from '../interfaces/vistaRecicladora.interface';

@Injectable({
  providedIn: 'root'
})
export class RecicladoraService {

  url: string = "http://localhost:3000/materiales";

  constructor(
    private http: HttpClient
  ) { }

  public getMaterialesPorRecicladora(idrecicladora: number): Observable<Material[]>{
    return this.http.get<Recicladora[]>(this.url+'/'+idrecicladora+'material');
  }

}