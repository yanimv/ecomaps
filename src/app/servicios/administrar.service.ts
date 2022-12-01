import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { Preferences } from '@capacitor/preferences';
import { Key } from 'protractor';
import { SesionService } from './sesion.service';

@Injectable({
    providedIn: 'root'
  })
  export class AdministrarService {
  
    url: string = 'http://localhost:3000/administrar';
  
    constructor(
      private http: HttpClient,
      private sesion: SesionService
    ) { }
  
    public get(): Observable<Recicladoras[]>{ 
      return this.http.get<Recicladoras[]>(this.url, {headers: this.obtenerCabeceras()});
    }
  
    public post(recicladora: Recicladoras): Observable<any>{
      return this.http.post(this.url, recicladora, {responseType: 'text', headers: this.obtenerCabeceras('application/json')});
    }
  
    public put(recicladora: Recicladoras): Observable<any>{
      
      return this.http.put(this.url, recicladora, {responseType: 'text', headers: this.obtenerCabeceras('application/json')});
    }
  
    public delete(recicladora: Recicladoras): Observable<any>{
      return this.http.delete(`${this.url}/${recicladora.idrecicladora}`, {responseType: 'text', headers: this.obtenerCabeceras('application/json')});
    }

    private obtenerCabeceras(contentType?: string): HttpHeaders{
      let cabeceras: HttpHeaders = new HttpHeaders();
      if(contentType) cabeceras = cabeceras.append('Content-Type', contentType);   
      if(this.sesion.getToken()) cabeceras = cabeceras.append('Authorization', `Bearer ${this.sesion.getToken()}`);
      return cabeceras;
    }
  
  }