import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController, ViewWillEnter } from '@ionic/angular';
import { Formulario } from '../interfaces/formulario.interface';
import { FormularioService } from '../servicios/formulario.service';
import { ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-agregar-rec',
  templateUrl: './agregar-rec.page.html',
  styleUrls: ['./agregar-rec.page.scss'],
})
export class AgregarRecPage implements OnInit {

  @ViewChild(IonRefresher) refresher!: IonRefresher;

  public form: FormGroup = new FormGroup({
    nombreCtrl: new FormControl<string>(null,Validators.required),
    ciudadCtrl: new FormControl<string>(null,Validators.required),
    barrioCtrl: new FormControl<string>(null,Validators.required),
    calleCtrl: new FormControl<string>(null,Validators.required),
    gpsCtrl: new FormControl<string>(null,Validators.required),
    telefonoCtrl: new FormControl<number>(null,Validators.required),
    pagaCtrl: new FormControl<string>(null,Validators.required),
    materialCtrl: new FormControl<string>(null,Validators.required)
  });

  public modalVisible: boolean = false

  constructor(
    private servicioFormulario: FormularioService,
    private servicioToast: ToastController
  ) { }

  ionViewWillEnter(): void {
    this.form.reset();
  }

  ngOnInit() {  }

  public nuevo(){
    this.modalVisible = true;
  }

}
