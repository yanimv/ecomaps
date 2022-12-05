import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController, ViewWillEnter } from '@ionic/angular';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit, ViewWillEnter {

  form: FormGroup = new FormGroup({
    ipCtrl: new FormControl<string>(null, [Validators.required])
  });

  constructor(
    private servicioAPI: ApiService,
    private servicioToast: ToastController
  ) { }

  ionViewWillEnter(): void {
    console.log(this.servicioAPI.getIP());
    this.form.controls.ipCtrl.setValue(this.servicioAPI.getIP());
  }

  ngOnInit() {}

  guardar(){
    if(this.form.valid){
      this.servicioAPI.setIP(this.form.controls.ipCtrl.value);
      this.servicioToast.create({
        header: 'Ajustes guardados',
        color: 'success',
        duration: 3000,
      }).then(toast => toast.present());
  }

}
}
