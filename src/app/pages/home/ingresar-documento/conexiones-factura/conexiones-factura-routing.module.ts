import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexionesFacturaPage } from './conexiones-factura.page';
import { RutasOpcionesFlujo } from 'src/app/shared/const/rutas-opciones-flujo.const';

const routes: Routes = [
  {
    path: '',
    component: ConexionesFacturaPage
  },
  {
    path: RutasOpcionesFlujo.COMPROBANTES_QR_FACTURA,
    loadChildren: () =>
      import(
        './comprobantes-qr-factura/comprobantes-qr-factura.module'
      ).then(m => m.ComprobantesQrFacturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConexionesFacturaPageRoutingModule {}
