import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarDocumentoPageRoutingModule } from './ingresar-documento-routing.module';

import { IngresarDocumentoPage } from './ingresar-documento.page';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IngresarDocumentoPageRoutingModule,
    SharedModule
],
  declarations: [IngresarDocumentoPage]
})
export class IngresarDocumentoPageModule {}
