import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprobantesDeudaPageRoutingModule } from './comprobantes-deuda-routing.module';

import { ComprobantesDeudaPage } from './comprobantes-deuda.page';
import { GenerarQrDePagoComponent } from './generar-qr-de-pago/generar-qr-de-pago.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprobantesDeudaPageRoutingModule,
    SharedModule
  ],
  declarations: [ComprobantesDeudaPage, GenerarQrDePagoComponent],
  exports:[
    ComprobantesDeudaPageRoutingModule,
    GenerarQrDePagoComponent
  ]
})
export class ComprobantesDeudaPageModule {}
