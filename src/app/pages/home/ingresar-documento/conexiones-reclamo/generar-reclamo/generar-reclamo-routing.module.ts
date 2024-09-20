import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarReclamoPage } from './generar-reclamo.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarReclamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarReclamoPageRoutingModule {}
