import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntConexionesDeuda } from 'src/app/shared/interfaces/conexiones-deuda.interface';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
import { RutasOpcionesFlujo as rutas } from 'src/app/shared/const/rutas-opciones-flujo.const';
import { BuscadorService } from 'src/app/shared/services/buscador.service';

@Component({
  selector: 'app-conexiones-deuda',
  templateUrl: './conexiones-deuda.page.html',
  styleUrls: ['./conexiones-deuda.page.scss']
})
export class ConexionesDeudaPage implements OnInit {
  conexiones: IntConexionesDeuda[] = [];
  conexionesFiltradas: IntConexionesDeuda[] = [];

  constructor(
    private opciones: OpcionesSeleccionadasService,
    private router: Router,
    private route: ActivatedRoute,
    private buscadorService: BuscadorService
  ) { }

  ngOnInit() {
    this.opciones.setConexionSeleccionada(undefined);
    this.getConexiones();
  }

  getConexiones(): void {
    this.conexiones = this.opciones.getConexionesDeuda();
    this.conexiones = this.conexiones.filter(
      (resultado: any) => {
        return resultado.Importe != ".00"
      }
    )
    this.conexionesFiltradas = this.conexiones
  }

  SeleccionarConexion(conexion: IntConexionesDeuda): void {
    this.opciones.setConexionSeleccionada(conexion);
    this.router.navigate([rutas.COMPROBANTES_DEUDA, conexion.NroConexion], {
      relativeTo: this.route
    });
  }

  buscador(query: any) {
    this.conexionesFiltradas = this.buscadorService.buscarConexionDeuda(query, this.conexiones)
  }

}
