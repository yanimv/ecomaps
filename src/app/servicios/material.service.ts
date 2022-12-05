import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(
    private http: HttpClient,
    private servicioAPI: ApiService
  ) { }

  public get(): Observable<Material[]>{
    return this.http.get<Material[]>(this.servicioAPI.getURLmaterial());
  }

}
