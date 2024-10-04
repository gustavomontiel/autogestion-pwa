import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement | undefined;
  peticiones = 0;


  constructor(public loadingController: LoadingController) {
    
  }

  async present(msg = 'Procesando...') {
    this.peticiones++;
    
    if (this.peticiones === 1) {
      if ( !this.loading ) {
        this.loading = await this.loadingController.create();
      }
      this.loading.message = msg;
      this.loading.present();
    }
  }

  dismiss() {
    this.peticiones--;
    let esperarMs = this.loading ? 0 : 500;
    if (this.peticiones === 0) {
      setTimeout(() => {
        this.loading?.dismiss();
        this.loading = undefined; 
      }, esperarMs);
    }
  }
}
