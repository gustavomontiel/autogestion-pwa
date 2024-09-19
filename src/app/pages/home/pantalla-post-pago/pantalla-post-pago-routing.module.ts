import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaPostPagoPage } from './pantalla-post-pago.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaPostPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaPostPagoPageRoutingModule {}
