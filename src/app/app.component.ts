import {
  Component, HostListener,/* , OnInit */
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  RutasOpcionesFlujo as rutas
} from 'src/app/shared/const/rutas-opciones-flujo.const';
import { LocalidadesService } from './shared/services/localidades.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  lastTouchTime: string;
  inactivityTimeout: any;
  mostrandoAlert: boolean = false
  milisegundosHastaAlerta: any;
  milisegundosHastaHome: any;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private localidadesService: LocalidadesService
  ) {
    this.milisegundosHastaAlerta = 30000;
    this.milisegundosHastaHome = 15000;
    this.lastTouchTime = 'Nunca';
    this.iniciarContadorInactividad();
  }

  ngOnInit() {
    this.localidadesService.getLocalidades().subscribe();
    this.router.navigate([rutas.HOME]);
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    const currentTime = new Date().toLocaleString();
    this.lastTouchTime = currentTime;
    console.log('Pantalla tocada en:', currentTime);

    if (!this.mostrandoAlert) {
      this.reiniciarContadorInactividad();
    }
  }

  iniciarContadorInactividad() {
    if (this.lastTouchTime != 'Nunca') {
      this.inactivityTimeout = setTimeout(() => {
        this.mostrarAlertaInactividad();
      }, this.milisegundosHastaAlerta); // 30 segundos
    }
  }

  reiniciarContadorInactividad() {
    clearTimeout(this.inactivityTimeout);
    this.iniciarContadorInactividad();
  }

  async mostrarAlertaInactividad() {
    this.mostrandoAlert = true


    const alert = await this.alertController.create({
      header: 'Sigue ahi?',
      message: 'No se ha detectado actividad en 30 segundos. En 15 segundos se volvera automaticamente al inicio.',
      buttons: [
        {
          text: '¡Sigo aqui!',
          handler: () => {
            alert.dismiss();
            alert.isOpen = false
            this.mostrandoAlert = false
            this.reiniciarContadorInactividad();
          }

        },
        {
          text: 'Volver al inicio',
          handler: () => {
            this.mostrandoAlert = false
            this.router.navigate([rutas.HOME], {
              relativeTo: this.route
            });
          }
        }
      ],

    });
    await alert.present()
    alert.isOpen = true
    console.log('inicia contador');

    setTimeout(() => {
      if (alert.isOpen) {
        this.router.navigate([rutas.HOME], {
          relativeTo: this.route
        });
        this.mostrandoAlert = false
        alert.isOpen = false
        alert.dismiss();
        console.log('TRUE', alert.isOpen);
      } else {
        console.log('false', alert.isOpen);
      }

    }, this.milisegundosHastaHome); // 15 segundos

  }
}
