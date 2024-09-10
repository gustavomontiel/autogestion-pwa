import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntConexionesDeuda } from 'src/app/shared/interfaces/conexiones-deuda.interface';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
import { RutasOpcionesFlujo as rutas } from 'src/app/shared/const/rutas-opciones-flujo.const';
import { BuscadorService } from 'src/app/shared/services/buscador.service';

@Component({
  selector: 'app-conexiones-factura',
  templateUrl: './conexiones-factura.page.html',
  styleUrls: ['./conexiones-factura.page.scss']
})
export class ConexionesFacturaPage implements OnInit, AfterViewInit {
  conexiones: IntConexionesDeuda[] = [];
  conexionesFiltradas: IntConexionesDeuda[] = [];

  constructor(
    private opciones: OpcionesSeleccionadasService,
    private router: Router,
    private route: ActivatedRoute,
    private buscadorService: BuscadorService
  ) { }

  ngOnInit() {
    this.getConexiones();
  }

  ngAfterViewInit(): void {
    this.opciones.setConexionSeleccionada(undefined);
  }

  getConexiones(): void {
    this.conexiones = this.opciones.getConexionesDeuda();
    this.conexionesFiltradas = this.conexiones
  }

  SeleccionarConexion(conexion: IntConexionesDeuda): void {
    this.opciones.setConexionSeleccionada(conexion);
    this.router.navigate([rutas.COMPROBANTES_QR_FACTURA], {
      relativeTo: this.route
    });
  }

  buscador(query: any) {
    this.conexionesFiltradas = this.buscadorService.buscarConexion(query, this.conexiones)
  }

}
