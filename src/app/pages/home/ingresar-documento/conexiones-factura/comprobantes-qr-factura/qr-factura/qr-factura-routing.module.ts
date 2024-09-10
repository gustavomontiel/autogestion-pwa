import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrFacturaPage } from './qr-factura.page';

const routes: Routes = [
  {
    path: '',
    component: QrFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrFacturaPageRoutingModule {}
