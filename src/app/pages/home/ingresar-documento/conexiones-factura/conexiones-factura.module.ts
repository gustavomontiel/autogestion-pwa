import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConexionesFacturaPageRoutingModule } from './conexiones-factura-routing.module';

import { ConexionesFacturaPage } from './conexiones-factura.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexionesFacturaPageRoutingModule,
    SharedModule
  ],
  declarations: [ConexionesFacturaPage]
})
export class ConexionesFacturaPageModule {}
