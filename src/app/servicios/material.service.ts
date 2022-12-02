import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';
import { ApiUtil } from './api-util';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  url: string = `http://${ApiUtil.IP}:3000/material`;

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Material[]>{
    return this.http.get<Material[]>(this.url);
  }

}
