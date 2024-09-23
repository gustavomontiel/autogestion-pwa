import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonButton, NavController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
import { ReclamoService } from 'src/app/shared/services/reclamo.service';
import { RutasOpcionesFlujo as rutas } from 'src/app/shared/const/rutas-opciones-flujo.const';
import { GoogleMap, Marker } from '@capacitor/google-maps';

@Component({
  selector: 'app-generar-reclamo',
  templateUrl: './generar-reclamo.page.html',
  styleUrls: ['./generar-reclamo.page.scss'],
})
export class GenerarReclamoPage implements OnInit {

  isLoading = false;
  nroCx: string = '';
  motivo: string = '';
  descMotivo: string = '';
  conexiones: any[] = [];
  perfil: any;
  telefono: any;
  conexion: any;
  direccion: any = {};
  observacion: string = '';
  respuesta: any;
  email: any;
  asuntos: any;
  reclamoAbierto: any;

  asuntoSeleccionado: any | undefined;
  direccionIncorrecta: boolean = false;
  direccionCorrecta: any = undefined;
  marker: any | undefined;

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement> | undefined;
  newMap: GoogleMap | undefined;

  constructor(
    private reclamosService: ReclamoService,
    private opcSeleccionadas: OpcionesSeleccionadasService,
    private alertController: AlertController,
    private alertService: AlertService,
    private navController: NavController,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  customActionSheetOptions = {
    header: 'Seleccione un motivo',
  };

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getDatos();
  }


  getDatos() {
    this.perfil = this.opcSeleccionadas.getConexionSeleccionada();
    console.log(this.perfil);

    this.reclamosService.getAsuntos().subscribe(
      (data: any) => {
        this.asuntos = data
      }
    )
  }

  corregirDireccion() {
    this.direccionIncorrecta = true
    let unSegundo = setTimeout(() => { this.abirMapa() }, 1000)
  }
  async abirMapa() {
    const apiKey = 'AIzaSyAGuXiNYYpbczv8Baw-MqAMYRx44FxjH58';
    this.newMap = await GoogleMap.create({
      id: 'my-map',
      element: this.mapRef!.nativeElement,
      apiKey: apiKey,
      config: {
        center: {
          lat: -27.371584367487223,
          lng: -55.9178352355957,
        },
        zoom: 12,
      },

    })
    this.newMap.setOnMapClickListener((event) => {
      this.direccionCorrecta = "Latitud: " + event.latitude.toString() + " Longitud: " + event.longitude.toString()
      console.log(this.direccionCorrecta);
      this.añadirMarcador(event.latitude, event.longitude);
    });
  }


  async añadirMarcador(lat: number, lng: number) {
    if (this.marker) {
      await this.newMap!.removeMarker(this.marker);
    }
    this.marker = await this.newMap!.addMarker({
      coordinate: {
        lat,
        lng,
      },
      draggable: true,
    });
  }




  enviarReclamo() {

    this.reclamosService.getReclamosAbiertos(+this.perfil.NroConexion, +this.asuntoSeleccionado).subscribe(
      (data) => {
        this.reclamoAbierto = data;

        if (!this.reclamoAbierto) {
          let reclamoData = {
            origen: 33,
            documento: this.perfil.Documento,
            nroCx: this.perfil.NroConexion,
            idAsunto: this.asuntoSeleccionado,
            direccion: this.perfil.Direccion,
            observacionDomicilio: this.direccionIncorrecta ? 'Direccion indicada por el usuario: ' + this.direccionCorrecta : 'Direccion confirmada por usuario',
          };

          this.reclamosService.saveReclamo(reclamoData).subscribe({
            next: (data) => {
              this.respuesta = data;
              this.presentAlert(this.respuesta.respuesta.subtitulo);
              /* this.router.navigate(['/tabs/home/'], { replaceUrl: true }); */
            },
            error: (error) => {
              console.log(error);
            },
          });
        } else {
          if (this.reclamoAbierto.permiteReiteracion) {
            this.reiterarReclamo(this.reclamoAbierto);
          } else {
            this.alertService.present(
              'Usted ya generado un reclamo recientemente. Para reiterarlo, vuelva a intentarlo otra vez despues de un tiempo.',
              'Atención!',
            );
          }
          this.isLoading = false;
        }
      });
  }


  async reiterarReclamo(reclamo: any) {
    let alert = (
      await this.alertController.create({
        header: 'Reiteración de reclamo',
        message:
          'Ya existe un reclamo generado para la conexión ' +
          reclamo.nroCx +
          '. El mismo fue generado el ' +
          reclamo.FechaADD +
          ' y tiene el número: <b>' +
          reclamo.idSolicitud +
          '</b>. <hr>Si desea reiterar el reclamo por favor complete el campo Detalle.',
        /* inputs: [
          {
            name: 'detalle',
            placeholder: 'Detalle',
            type: 'textarea',
          },
        ], */
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (data) => {
              console.log('Solicitud cancelada.');
            },
          },
          {
            text: 'Reiterar',
            handler: (data) => {
              let reiteracionData = {
                idSolicitud: reclamo.idSolicitud,
                detalle: 'Reclamo reiterado desde Totem',
              };
              this.reclamosService.repeatReclamo(reiteracionData).subscribe(
                (data) => {
                  const respuesta: any = data;
                  this.alertService.present(respuesta.respuesta, 'Resultado');
                });
            },
          },
        ],
      })
    ).present();
  }


  async presentAlert(message: any) {
    const alert = await this.alertController.create({
      header: 'Reclamo generado correctamente',
      message: message,
      mode: 'ios',
      buttons: [
        {
          text: 'IR A INICIO',
          cssClass: 'alert-button-cancel',
          handler: () => this.router.navigate([rutas.HOME], {
            relativeTo: this.route
          }),
        }
      ],
    });

    await alert.present();
  }

  seleccionadorDeAsunto(asunto: any) {
    this.asuntoSeleccionado = asunto
  }
}
