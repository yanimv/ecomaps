import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecicladorasPage } from './recicladoras.page';

const routes: Routes = [
  {
    path: '',
    component: RecicladorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecicladorasPageRoutingModule {}
