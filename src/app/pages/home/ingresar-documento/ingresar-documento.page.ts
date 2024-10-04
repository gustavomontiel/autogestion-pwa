import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import {
  OpcionesFlujos,
  RutasOpcionesFlujo as rutas
} from 'src/app/shared/const/rutas-opciones-flujo.const';
import { IntConexionesDeuda } from 'src/app/shared/interfaces/conexiones-deuda.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { FlujoPagosService } from 'src/app/shared/services/flujo-pagos.service';
import { FlujoQrFacturaService } from 'src/app/shared/services/flujo-qr-factura.service';
import { FlujoReclamosService } from 'src/app/shared/services/flujo-reclamos.service';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
import { nroDocumentoValidator } from 'src/app/shared/validators/nro-documento.validator';

@Component({
  selector: 'app-ingresar-documento',
  templateUrl: './ingresar-documento.page.html',
  styleUrls: ['./ingresar-documento.page.scss']
})
export class IngresarDocumentoPage implements OnInit {
  form!: FormGroup;
  mostrarSpinner: boolean = false

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private flujoPagosService: FlujoPagosService,
    private flujoReclamosService: FlujoReclamosService,
    private flujoQrFacturaService: FlujoQrFacturaService,
    private opciones: OpcionesSeleccionadasService,
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.opciones.setNroDocumento('');
    this.form = this.fb.group({
      documento: ['', [Validators.required, nroDocumentoValidator()]]
    });

  }
  ionViewWillEnter() {
    this.mostrarSpinner = false
  }

  buscarDatosDocumento() {
    this.mostrarSpinner = true

    if (this.form.invalid) {
      this.alertService.present('Ingrese un documento válido');
      return;
    }

    const nroDocumento = this.form.get('documento')?.value;
    this.opciones.setNroDocumento(nroDocumento);
    this.clientesService.getClienteDeDocumento(nroDocumento).pipe(first()).subscribe();

    switch (this.opciones.getFlujoSeleccionada()) {
      case OpcionesFlujos.FLUJO_PAGOS:
        this.iniciarFlujoPagos();
        break;
      case OpcionesFlujos.FLUJO_QR_FACTURA:
        this.iniciarFlujoQrFactura();
        break;
      case OpcionesFlujos.FLUJO_RECLAMOS:
        this.iniciarFlujoReclamos();
        break;
      default:
        this.alertService.present('Opción no válida');
        break;
    }
  }

  iniciarFlujoPagos() {
    this.flujoPagosService
      .getConexionesDeuda(this.opciones.getNroDocumento())
      .subscribe({
        next: (conexiones: IntConexionesDeuda[]) => {
          if (!conexiones.length) {
            this.mostrarSpinner = false
            this.alertService.present(
              'No se encontraron datos para el número ingresado',
              'Verifique el número ingresado'
            );
            return;
          }

          const existeDeuda = conexiones.find(
            conexion => conexion.Importe != '0'
          );
          if (!existeDeuda) {
            this.alertService.present(
              'No se encontraron comprobantes pendientes para el número ingresado',
              'Atención'
            );
            return;
          }
          this.mostrarSpinner = false
          this.opciones.setConexionesDeuda(conexiones);
          this.router.navigate([rutas.FLUJO_PAGOS], { relativeTo: this.route });
        }
      });
  }

  // TODO
  iniciarFlujoQrFactura() {
    this.flujoQrFacturaService
      .getConexionesFactura(this.opciones.getNroDocumento())
      .subscribe({
        next: (conexiones: IntConexionesDeuda[]) => {
          if (!conexiones.length) {
            this.mostrarSpinner = false
            this.alertService.present(
              'No se encontraron datos para el número ingresado',
              'Verifique el número ingresado'
            );
            return;
          }
          this.mostrarSpinner = false
          this.opciones.setConexionesDeuda(conexiones);
          this.router.navigate([rutas.FLUJO_QR_FACTURA], {
            relativeTo: this.route
          });
        }
      });
  }

  // TODO
  iniciarFlujoReclamos() {
    this.flujoReclamosService
      .getConexionesReclamos(this.opciones.getNroDocumento())
      .subscribe({
        next: (conexiones: IntConexionesDeuda[]) => {
          if (!conexiones.length) {
            this.mostrarSpinner = false
            this.alertService.present(
              'No se encontraron datos para el número ingresado',
              'Verifique el número ingresado'
            );
            return;
          }
          this.mostrarSpinner = false
          this.opciones.setConexionesDeuda(conexiones);
          this.router.navigate([rutas.FLUJO_RECLAMOS], {
            relativeTo: this.route
          });
        }
      });
  }
}
