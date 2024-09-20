import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConexionesReclamoPageRoutingModule } from './conexiones-reclamo-routing.module';

import { ConexionesReclamoPage } from './conexiones-reclamo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexionesReclamoPageRoutingModule,
    SharedModule
  ],
  declarations: [ConexionesReclamoPage]
})
export class ConexionesReclamoPageModule {}
