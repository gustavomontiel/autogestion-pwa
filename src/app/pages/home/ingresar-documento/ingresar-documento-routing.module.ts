import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarDocumentoPage } from './ingresar-documento.page';
import { RutasOpcionesFlujo } from 'src/app/shared/const/rutas-opciones-flujo.const';

const routes: Routes = [
  {
    path: '',
    component: IngresarDocumentoPage
  },
  {
    path: RutasOpcionesFlujo.FLUJO_PAGOS,
    loadChildren: () =>
      import('./conexiones-deuda/conexiones-deuda.module').then(
        m => m.ConexionesDeudaPageModule
      )
  },
  {
    path: RutasOpcionesFlujo.FLUJO_QR_FACTURA,
    loadChildren: () =>
      import('./conexiones-factura/conexiones-factura.module').then(
        m => m.ConexionesFacturaPageModule
      )
  },
  {
    path: RutasOpcionesFlujo.FLUJO_RECLAMOS,
    loadChildren: () =>
      import('./conexiones-reclamo/conexiones-reclamo.module').then(
        m => m.ConexionesReclamoPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarDocumentoPageRoutingModule {}
