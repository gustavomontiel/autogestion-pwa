import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaPostPagoPageRoutingModule } from './pantalla-post-pago-routing.module';

import { PantallaPostPagoPage } from './pantalla-post-pago.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaPostPagoPageRoutingModule,
    SharedModule
  ],
  declarations: [PantallaPostPagoPage]
})
export class PantallaPostPagoPageModule {}
