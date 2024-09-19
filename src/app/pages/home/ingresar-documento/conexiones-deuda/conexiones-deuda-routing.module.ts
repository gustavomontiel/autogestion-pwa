import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexionesDeudaPage } from './conexiones-deuda.page';
import { RutasOpcionesFlujo } from 'src/app/shared/const/rutas-opciones-flujo.const';

const routes: Routes = [
  {
    path: '',
    component: ConexionesDeudaPage
  },
  {
    path: `${RutasOpcionesFlujo.COMPROBANTES_DEUDA}/:nroConexion`,
    loadChildren: () =>
      import('./comprobantes-deuda/comprobantes-deuda.module').then(
        m => m.ComprobantesDeudaPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConexionesDeudaPageRoutingModule {}
