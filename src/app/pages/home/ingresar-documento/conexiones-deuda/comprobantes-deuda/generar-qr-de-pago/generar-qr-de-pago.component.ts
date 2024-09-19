import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PagoMacroService } from 'src/app/shared/services/pago-macro.service';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
/* import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx'; */


@Component({
  selector: 'app-generar-qr-de-pago',
  templateUrl: './generar-qr-de-pago.component.html',
  styleUrls: ['./generar-qr-de-pago.component.scss'],
})
export class GenerarQrDePagoComponent implements OnInit {
  @Input() pendAPagar: any;
  @Input() tipo: any;
  @Input() arancel: any = 0;
  @Input() nroConexion: any;
  tipoDatos: any
  respuesta: any
  razonSocial: any;
  documento: any;
  currentURL: any

  /* options: InAppBrowserOptions = {
    hideurlbar: 'yes',//Or 'no'
  }; */

  constructor(
    private opcionesService: OpcionesSeleccionadasService,
    private pagosMacro: PagoMacroService,
    /* private inAppBrowser : InAppBrowser, */
    private alertService: AlertService,
    private router: Router
  ) {

  }

  ngOnInit() {
    console.log(this.pendAPagar);
    this.documento = this.opcionesService.getNroDocumento().toString();
    this.razonSocial = this.opcionesService.getConexionSeleccionada()?.RazonSocial;
  }

  async pagarMacro() {

    if (this.nroConexion && this.arancel) {
      this.tipoDatos = { arancel: this.arancel, conexion: this.nroConexion }
    } else { this.tipoDatos = {} }

    this.pagosMacro.getIDTranMulti(this.pendAPagar, this.tipo, this.tipoDatos).subscribe(

      (data: any) => {
        this.respuesta = data.respuesta;
        console.log(data.respuesta);
        const url = 'https://sistemas.energiademisiones.com.ar/comercial/plataformas-pagos/macro.html?'
          + 'callbackEncriptada=' + encodeURIComponent(data.respuesta.solicitudMacro.respuesta.callbackEncriptada) + '&'
          + 'cancelEncriptada=' + encodeURIComponent(data.respuesta.solicitudMacro.respuesta.cancelEncriptada) + '&'
          + 'comercio=' + encodeURIComponent(data.respuesta.solicitudMacro.respuesta.comercio) + '&'
          + 'sucursalEncriptada=' + encodeURIComponent(data.respuesta.solicitudMacro.respuesta.sucursalEncriptada) + '&'
          + 'id=' + encodeURIComponent(data.respuesta.id) + '&'
          + 'hashTx=' + encodeURIComponent(data.respuesta.solicitudMacro.respuesta.hashTx) + '&'
          + 'montoEncriptado=' + encodeURIComponent(data.respuesta.solicitudMacro.respuesta.montoEncriptado) + '&'
          + 'documento=' + encodeURIComponent(this.documento) + '&'
          + 'razonSocial=' + encodeURIComponent(this.razonSocial) + '&'
          + 'producto=' + encodeURIComponent('Pago de facturas Energia de Misiones') + '&'
          + 'informacion=' + encodeURIComponent('')

          window.open(url, '_self');
        /* const windowRef = this.inAppBrowser.create(url, '_self', this.options)

        windowRef.on('exit').subscribe(data => {
          this.alertService.presentWithButtonsHandler(
            "Si realizó un pago, el mismo se verá reflejado en su cuenta en un momento.",
            undefined,
            [{
              text: 'OK',
              handler: data => {
                this.router.navigate(['/tabs/mi-cuenta'], { replaceUrl: true });
              }
            }]
          )
        }); */
      });
  }
}
