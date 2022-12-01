import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController, IonRefresher, ViewWillEnter } from '@ionic/angular';
import { SesionService } from '../servicios/sesion.service';
import { Credenciales } from './../interfaces/credenciales.interface'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewWillEnter {

  @ViewChild(IonRefresher) refresher!: IonRefresher;

  public form: FormGroup = new FormGroup({
    ci: new FormControl<number | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  })

  constructor(
    private servicioSesion: SesionService,
    private servicioToast: ToastController,
    private router: Router,
    private sesion: SesionService
  ) { 
    
  }
  ionViewWillEnter(): void {
    const token: string | null = this.sesion.getToken();
    if(token){
      const jwt: JwtHelperService = new JwtHelperService();
      if(!jwt.isTokenExpired(token)){
        this.router.navigate(['/administrador'])
      }
    }
    this.recargarLogin();
  }

  ngOnInit(): void {
    
  }

  public recargarLogin(){
    this.refresher?.complete();
  }

  public iniciarSesion(){
    this.actualizarValidación();    
    if(this.form.valid){
      const cred: Credenciales = {
        ci: this.form.get('ci')?.value,
        password: this.form.get('password')?.value
      }   
      this.servicioSesion.iniciar(cred).subscribe({
        next: (respuesta) => {          
          this.servicioToast.create({
            header: 'Inicio de sesión correcto',
            message: '',
            duration: 2000,
            color: 'success',
            position: 'middle'
          }).then(t=> {t.present()});
          this.router.navigate(['/administrador'])
        },
        error: (e) => {
          console.error('Error al iniciar sesión.', e);
          this.servicioToast.create({
            header: 'CI o contraseña incorrecta.',
            message: e.message,
            duration: 5000,
            color: 'danger',
            position: 'bottom'
          }).then(toast => toast.present());          
        }
      })
    }
    console.log(this.form.get('ci')?.value);
    console.log(this.form.get('password')?.value);
  }  

  private actualizarValidación(){
    if(this.form.get('ci')?.invalid){
      this.form.get('ci')?.markAsTouched();
      this.form.get('ci')?.markAsDirty();
    }
    if(this.form.get('password')?.invalid){
      this.form.get('password')?.markAsTouched();
      this.form.get('password')?.markAsDirty();
    }
  }

}
