import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprobantesDeudaPage } from './comprobantes-deuda.page';

const routes: Routes = [
  {
    path: '',
    component: ComprobantesDeudaPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobantesDeudaPageRoutingModule {}
