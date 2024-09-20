import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarReclamoPageRoutingModule } from './generar-reclamo-routing.module';

import { GenerarReclamoPage } from './generar-reclamo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarReclamoPageRoutingModule,
    SharedModule
  ],
  declarations: [GenerarReclamoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GenerarReclamoPageModule {}
