import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaPostPagoPageRoutingModule } from './pantalla-post-pago-routing.module';

import { PantallaPostPagoPage } from './pantalla-post-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaPostPagoPageRoutingModule
  ],
  declarations: [PantallaPostPagoPage]
})
export class PantallaPostPagoPageModule {}
