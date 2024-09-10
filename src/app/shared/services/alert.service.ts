import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async present(msg: string, header: string = '', buttons: string[] = ['OK']) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: buttons
    });

    await alert.present();
  }

  async presentWithButtonsHandler(
    msg: string,
    header: string = '',
    buttons: string[] | AlertButton[] = ['OK']
  ) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: buttons
    });

    await alert.present();
  }
}
