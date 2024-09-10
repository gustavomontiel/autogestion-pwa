import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntFacturasLink } from 'src/app/shared/interfaces/facturas-link.interface';
import { FlujoQrFacturaService } from 'src/app/shared/services/flujo-qr-factura.service';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
import { RutasOpcionesFlujo as rutas } from 'src/app/shared/const/rutas-opciones-flujo.const';


@Component({
  selector: 'app-comprobantes-qr-factura',
  templateUrl: './comprobantes-qr-factura.page.html',
  styleUrls: ['./comprobantes-qr-factura.page.scss']
})
export class ComprobantesQrFacturaPage implements OnInit, AfterViewInit {
  mesSeleccionado: string | undefined
  facturasConLink!: IntFacturasLink[];
  facturasConLinkFiltradas!: IntFacturasLink[];
  nroConexion: string | undefined;
  conexion:any;

  constructor(
    private opciones: OpcionesSeleccionadasService,
    private flujoQrFacturaService: FlujoQrFacturaService,
    private router: Router,
    private route: ActivatedRoute,


  ) {
    this.mesSeleccionado = '0';
  }

  ngOnInit() {
    this.getFacturasConLink();
    this.conexion = this.opciones.getConexionSeleccionada()


  }

  ngAfterViewInit(): void {
    this.opciones.setFacturaQrSeleccionada(undefined);
  }

  seleccionarFactura(factura: IntFacturasLink): void {
    this.flujoQrFacturaService.enviarFacturaPorMail(this.opciones.getNroDocumento(),factura.idComprobante).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
    this.opciones.setFacturaQrSeleccionada(factura);
    this.router.navigate([rutas.QR_FACTURA, factura.linkComprobante], {
      relativeTo: this.route
    });
  }

  getFacturasConLink() {
    const nroDocumento = this.opciones.getNroDocumento().toString();
    this.nroConexion = this.opciones.getConexionSeleccionada()?.NroConexion;

    if (!this.nroConexion) {
      return;
    }

    this.flujoQrFacturaService
      .getUltimasFacturas(nroDocumento, this.nroConexion)
      .subscribe({
        next: facturas => {
          this.facturasConLink = facturas;
          console.log(facturas);
        },
        error: error => {
          console.log(error);
        }
      });
  }


}
