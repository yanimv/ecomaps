import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { Preferences } from '@capacitor/preferences';
import { Key } from 'protractor';
import { SesionService } from './sesion.service';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
  })
  export class AdministrarService {
  
    constructor(
      private http: HttpClient,
      private sesion: SesionService,
      private servicioAPI: ApiService
    ) { }
  
    public get(): Observable<Recicladoras[]>{ 
      return this.http.get<Recicladoras[]>(this.servicioAPI.getURLadministrar(), {headers: this.obtenerCabeceras()});
    }
  
    public post(recicladora: Recicladoras): Observable<any>{
      return this.http.post(this.servicioAPI.getURLadministrar(), recicladora, {responseType: 'text', headers: this.obtenerCabeceras('application/json')});
    }
  
    public put(recicladora: Recicladoras): Observable<any>{
      
      return this.http.put(this.servicioAPI.getURLadministrar(), recicladora, {responseType: 'text', headers: this.obtenerCabeceras('application/json')});
    }
  
    public delete(recicladora: Recicladoras): Observable<any>{
      return this.http.delete(`${this.servicioAPI.getURLadministrar()}/${recicladora.idrecicladora}`, {responseType: 'text', headers: this.obtenerCabeceras('application/json')});
    }

    private obtenerCabeceras(contentType?: string): HttpHeaders{
      let cabeceras: HttpHeaders = new HttpHeaders();
      if(contentType) cabeceras = cabeceras.append('Content-Type', contentType);   
      if(this.sesion.getToken()) cabeceras = cabeceras.append('Authorization', `Bearer ${this.sesion.getToken()}`);
      return cabeceras;
    }
  
  }