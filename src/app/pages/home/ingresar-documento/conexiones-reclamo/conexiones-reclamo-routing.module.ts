import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexionesReclamoPage } from './conexiones-reclamo.page';

const routes: Routes = [
  {
    path: '',
    component: ConexionesReclamoPage
  },  {
    path: 'generar-reclamo',
    loadChildren: () => import('./generar-reclamo/generar-reclamo.module').then( m => m.GenerarReclamoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConexionesReclamoPageRoutingModule {}
