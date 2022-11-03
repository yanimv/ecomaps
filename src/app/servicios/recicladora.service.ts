import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recicladora } from '../interfaces/recicladora.interface';

@Injectable({
  providedIn: 'root'
})
export class RecicladoraService {

  url: string = "http://localhost:3000/recicladoras";

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Recicladora[]>{
    return this.http.get<Recicladora[]>(this.url);
  }

}
