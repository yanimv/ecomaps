import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Formulario } from '../interfaces/formulario.interface';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-agregar-rec',
  templateUrl: './agregar-rec.page.html',
  styleUrls: ['./agregar-rec.page.scss'],
})
export class AgregarRecPage implements OnInit {

  public form: FormGroup = new FormGroup({
    nombreCtrl: new FormControl<string>(null,Validators.required),
    ciudadCtrl: new FormControl<string>(null,Validators.required),
    barrioCtrl: new FormControl<string>(null,Validators.required),
    calleCtrl: new FormControl<string>(null,Validators.required),
    gpsCtrl: new FormControl<string>(null,Validators.required),
    telefonoCtrl: new FormControl<number>(null,Validators.required),
    pagaCtrl: new FormControl<string>(null,Validators.required),
  });

  constructor(
    private servicioFormulario: FormularioService,
    private servicioToast: ToastController
  ) { }

  ngOnInit() {  }

  guardar(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.registrar();
    }
  };

  private registrar(){
    const formulario: Formulario = {
      idformulario: null,
      nombre: this.form.controls.nombreCtrl.value,
      ciudad: this.form.controls.ciudadCtrl.value,
      barrio: this.form.controls.barrioCtrl.value,
      calle: this.form.controls.calleCtrl.value,
      gps: this.form.controls.gpsCtrl.value,
      telefono: this.form.controls.telefonoCtrl.value,
      paga: this.form.controls.pagaCtrl.value,
    }
    this.servicioFormulario.post(formulario).subscribe({
      next: ()=>{
        this.servicioToast.create({
          header: 'Éxito',
          message: 'Se registró correctamente la recicladora.',
          duration: 3000,
          color: 'success'
        }).then(t=> {t.present()});
      },
      error: (e) => {
        console.error('Error al registrar recicladora', e);
        this.servicioToast.create({
          header: 'Error al registrar',
          message: e.error,
          duration: 3500,
          color: 'danger'
        }).then(t => t.present());
      }
    })
  }

}
