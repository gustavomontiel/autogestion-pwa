import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprobantesQrFacturaPageRoutingModule } from './comprobantes-qr-factura-routing.module';

import { ComprobantesQrFacturaPage } from './comprobantes-qr-factura.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprobantesQrFacturaPageRoutingModule,
    SharedModule
  ],
  declarations: [ComprobantesQrFacturaPage]
})
export class ComprobantesQrFacturaPageModule {}
