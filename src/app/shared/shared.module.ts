import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonVolverComponent } from './components/boton-volver/boton-volver.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    BotonVolverComponent, HeaderComponent
  ]
  ,
  imports: [
    CommonModule, FormsModule, IonicModule,
  ],
  exports: [
    BotonVolverComponent,HeaderComponent

  ]
})
export class SharedModule { }
