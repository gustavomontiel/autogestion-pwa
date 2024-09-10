import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprobantesQrFacturaPage } from './comprobantes-qr-factura.page';

const routes: Routes = [
  {
    path: '',
    component: ComprobantesQrFacturaPage
  },
  {
    path: 'qr-factura/:urlFactura',
    loadChildren: () =>
      import('./qr-factura/qr-factura.module').then(
        m => m.QrFacturaPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobantesQrFacturaPageRoutingModule {}
