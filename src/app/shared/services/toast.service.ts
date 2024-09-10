import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

type toastPosition = 'top' | 'bottom' | 'middle';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(
    msg: string,
    color: string = 'primary',
    position: toastPosition = 'top',
    duration: number = 3000
  ) {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      color: color,
      duration: duration
    });
    toast.present();
  }
}
