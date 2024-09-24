import { Component, OnInit } from '@angular/core';
import { IntFacturasPendiente } from 'src/app/shared/interfaces/facturas-pendientes.interface';
import { IntFacturasProcesadas } from 'src/app/shared/interfaces/facturas-procesadas.interface';
import { FlujoPagosService } from 'src/app/shared/services/flujo-pagos.service';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';

@Component({
  selector: 'app-comprobantes-deuda',
  templateUrl: './comprobantes-deuda.page.html',
  styleUrls: ['./comprobantes-deuda.page.scss']
})
export class ComprobantesDeudaPage implements OnInit {
  facturasPendientes!: IntFacturasPendiente[];
  facturasProcesadas: IntFacturasProcesadas[] = []
  nroConexion: string | undefined;
  arancel: number = 0;
  esRehabilitacion: boolean = false;
  importeTotal: number = 0;
  pendAPagar: IntFacturasProcesadas[] = [];
  showPagar: boolean = false;
  showSiguiente: boolean = true;
  aceptarRecargo: boolean = false;
  conexion:any;

  constructor(
    private opciones: OpcionesSeleccionadasService,
    private flujoPagosService: FlujoPagosService
  ) { }

  ngOnInit() {
    this.getDatos();
  }

  getDatos() {
    this.conexion = this.opciones.getConexionSeleccionada()
    const nroDocumento = this.opciones.getNroDocumento().toString();
    this.nroConexion = this.opciones.getConexionSeleccionada()?.NroConexion;

    if (!this.nroConexion) {
      return;
    }

    this.flujoPagosService.getFacturasPendientes(nroDocumento, this.nroConexion).subscribe({
      next: facturas => {
        this.facturasPendientes = facturas;

        this.facturasPendientes.forEach(
          (factura: any) => {
            if (factura.corte != '0') {
              this.esRehabilitacion = true;
              this.arancel = parseFloat(factura.arancel);
              this.importeTotal = this.importeTotal + parseFloat(factura.Importe);
              factura.rehabilitacion = true;
              this.facturasProcesadas.push(factura);
              this.pendAPagar.push(factura);

            } else {
              factura.rehabilitacion = false;
              this.facturasProcesadas.push(factura);
            }
          }
        )

      },
      error: error => {
        console.log(error);
      }
    });
  }

  toggle(item: any) {    
    if (this.pendAPagar.indexOf(item) == -1) {
      this.pendAPagar.push(item);
    } else {
      this.pendAPagar.splice(this.pendAPagar.indexOf(item), 1);
    }

    this.calcularTotalAPagar();
  }

  calcularTotalAPagar() {
    let importeTotal: number = 0

    this.pendAPagar.forEach((factura: any) => {
      importeTotal = importeTotal + parseFloat(factura.Importe);
    });

    return importeTotal

  }

  cambiarAceptacion() {
    this.aceptarRecargo = !this.aceptarRecargo;
  }

  pagar() {
    this.showPagar = true;
    this.showSiguiente = false;
    this.calcularTotalAPagar();
  }

}
