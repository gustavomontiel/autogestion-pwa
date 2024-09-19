import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConexionesDeudaPageRoutingModule } from './conexiones-deuda-routing.module';

import { ConexionesDeudaPage } from './conexiones-deuda.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexionesDeudaPageRoutingModule,
    SharedModule
  ],
  declarations: [ConexionesDeudaPage]
})
export class ConexionesDeudaPageModule {}
