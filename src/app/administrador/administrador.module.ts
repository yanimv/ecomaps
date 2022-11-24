import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorPageRoutingModule } from './administrador-routing.module';

import { AdministradorPage } from './administrador.page';
import { RecicladorasComponent } from './recicladoras/recicladoras.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdministradorPage, RecicladorasComponent]
})
export class AdministradorPageModule {}
