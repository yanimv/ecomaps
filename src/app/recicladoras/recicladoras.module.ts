import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';

import { RecicladorasPageRoutingModule } from './recicladoras-routing.module';

import { RecicladorasPage } from './recicladoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecicladorasPageRoutingModule
  ],
  declarations: [RecicladorasPage],
  providers: [ToastController]
})
export class RecicladorasPageModule {}
