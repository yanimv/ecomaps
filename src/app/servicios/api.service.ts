import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ipApi: string = 'localhost';

  constructor() { 
    Preferences.get({key: 'ipApi'}).then(pref=>{
      console.log('La IP de la API obtenida es: ',pref.value);
      if(pref.value != null){
        this.ipApi = pref.value;
      } 
    }).catch(err => {
      console.log('Error al cargar la IP de la API desde Preferences', err);
    })
  }

  setIP(ip: string){
    this.ipApi = ip;
    Preferences.set({key: 'ipApi', value: ip});
  }

  getIP(): string{
    return this.ipApi;
  }

  getURLadministrar(): string{
    return `http://${this.ipApi}:3000/administrar`
  }

  getURLcomentarios(): string{
    return `http://${this.ipApi}:3000/comentarios`
  }

  getURLdetalleMaterial(): string{
    return `http://${this.ipApi}:3000/detalleMaterial`
  }

  getURLlistarecicladoras(): string{
    return `http://${this.ipApi}:3000/listarecicladoras`
  }

  getURLmaterial(): string{
    return `http://${this.ipApi}:3000/material`
  }

  getURLrecicladora(): string{
    return `http://${this.ipApi}:3000/recicladoras`
  }

  getURLsesion(): string{
    return `http://${this.ipApi}:3000/sesion`
  }

}
