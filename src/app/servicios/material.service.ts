import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  url: string = "http://localhost:3000/material";

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Material[]>{
    return this.http.get<Material[]>(this.url);
  }

}
