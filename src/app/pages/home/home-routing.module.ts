import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RutasOpcionesFlujo } from 'src/app/shared/const/rutas-opciones-flujo.const';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: RutasOpcionesFlujo.INGRESAR_DOCUMENTO,
    loadChildren: () =>
      import('./ingresar-documento/ingresar-documento.module').then(
        m => m.IngresarDocumentoPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
