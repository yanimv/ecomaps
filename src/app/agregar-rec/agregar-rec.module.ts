import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecPageRoutingModule } from './agregar-rec-routing.module';

import { AgregarRecPage } from './agregar-rec.page';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    AgregarRecPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarRecPage, FormularioComponent]
})
export class AgregarRecPageModule {}
