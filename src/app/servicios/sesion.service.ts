import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Credenciales } from '../interfaces/credenciales.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Preferences } from '@capacitor/preferences';
import { Key } from 'protractor';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private timer: any;
  private token: string | null = null;

  constructor(
    private http: HttpClient,
    private servicioAPI: ApiService
  ) { 
    Preferences.get({key: 'token'}).then(pref =>{
      this.token = pref.value;
      if(this.token){
        this.procesarToken(this.token)
      }
    }).catch(e => {
      console.error("Error al cargar token desde Preferences", e);
    })
  }

  public getToken(): string | null {
    return this.token;
  }

  public eliminarToken(){
    this.token = null;
    Preferences.remove({key: 'token'});
  }

  public iniciar(cred: Credenciales): Observable<{token:string}>{
    return this.http.post<{token: string}>(`${this.servicioAPI.getURLsesion()}/iniciar`, cred).pipe(
      tap(resp => {
        Preferences.set({key: 'token', value: resp.token})
        this.procesarToken(resp.token);
        this.token = resp.token;
      })
    )
  }

  private mantener(): Observable<{token: string}>{
    return this.http.post<{token: string}>(`${this.servicioAPI.getURLsesion()}/mantener`, {token: this.token});
  }

  private procesarToken(token: string){
    const jwt: JwtHelperService = new JwtHelperService();
    const expiracion: Date | null = jwt.getTokenExpirationDate(token);
    if(expiracion){
      const renovacion: Date = new Date(expiracion.getTime()-20000)
      const ejecutarEn: number = renovacion.getTime()-Date.now();
      this.timer = setTimeout(()=>{
        this.mantener().subscribe({
          next: (resp) => {
            console.log('Nuevo token recibido.')
            Preferences.set({key: 'token', value: resp.token})
            this.token = resp.token;
            this.procesarToken(resp.token); 
          },
          error: (e) => {
            console.log('Error al mantener sesion.', e);
          }
        })
      }, ejecutarEn)
    }
  }

}
