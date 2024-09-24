import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RutasOpcionesFlujo } from './shared/const/rutas-opciones-flujo.const';

const routes: Routes = [
  {
    path: RutasOpcionesFlujo.HOME,
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: `/${RutasOpcionesFlujo.HOME}`,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: `/${RutasOpcionesFlujo.HOME}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
