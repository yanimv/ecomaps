import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRecPage } from './agregar-rec.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRecPageRoutingModule {}
