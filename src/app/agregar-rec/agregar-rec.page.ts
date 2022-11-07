import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private servicioFormulario: FormularioService
  ) { }

  ngOnInit() {  }


}
