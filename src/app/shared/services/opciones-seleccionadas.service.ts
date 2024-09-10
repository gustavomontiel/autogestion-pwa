import { Injectable } from '@angular/core';
import { IntOpcionesFlujo } from '../interfaces/opciones-flujo.interface';
import { OpcionesFlujos } from '../const/rutas-opciones-flujo.const';
import { IntConexionesDeuda } from '../interfaces/conexiones-deuda.interface';
import { IntFacturasPendiente } from '../interfaces/facturas-pendientes.interface';
import { IntFacturasLink } from '../interfaces/facturas-link.interface';

@Injectable({
  providedIn: 'root'
})
export class OpcionesSeleccionadasService {
  private options!: IntOpcionesFlujo;

  constructor() {
    this.resetOpciones();
  }

  resetOpciones() {
    this.options = {
      flujoSeleccionado: '',
      nroDocumento: '',
      flujoPagos: {
        conexionesDeuda: [],
        conexionSeleccionada: undefined,
        facturasPendientes: [],
        facturasSeleccionadas: []
      },
      flujoQr: {
        conexionesQr: [],
        conexionQrSeleccionada: undefined,
        facturasQr: [],
        facturaQrSeleccionada: undefined
      }
    };
  }

  getFlujoSeleccionada(): OpcionesFlujos | '' {
    return this.options.flujoSeleccionado;
  }

  setFlujoSeleccionado(option: OpcionesFlujos): void {
    this.options.flujoSeleccionado = option;
  }

  getNroDocumento(): string {
    return this.options.nroDocumento;
  }

  setNroDocumento(nroDocumento: string): void {
    this.options.nroDocumento = nroDocumento;
  }

  getConexionesDeuda(): IntConexionesDeuda[] {
    return this.options.flujoPagos.conexionesDeuda;
  }

  setConexionesDeuda(conexionesDeuda: IntConexionesDeuda[]): void {
    this.options.flujoPagos.conexionesDeuda = conexionesDeuda;
  }

  getConexionSeleccionada(): IntConexionesDeuda | undefined {
    return this.options.flujoPagos.conexionSeleccionada;
  }

  setConexionSeleccionada(
    conexionSeleccionada: IntConexionesDeuda | undefined
  ): void {
    this.options.flujoPagos.conexionSeleccionada = conexionSeleccionada;
  }

  getFacturasPendientes(): IntFacturasPendiente[] {
    return this.options.flujoPagos.facturasPendientes;
  }

  setFacturasPendientes(facturasPendientes: IntFacturasPendiente[]): void {
    this.options.flujoPagos.facturasPendientes = facturasPendientes;
  }

  getFacturasSeleccionadas() {
    return this.options.flujoPagos.facturasSeleccionadas;
  }

  setFacturasSeleccionadas(facturasSeleccionadas: IntFacturasPendiente[]) {
    this.options.flujoPagos.facturasSeleccionadas = facturasSeleccionadas;
  }

  getConexionesQr(): IntConexionesDeuda[] {
    return this.options.flujoQr.conexionesQr;
  }

  setConexionesQr(conexionesQr: IntConexionesDeuda[]) {
    this.options.flujoQr.conexionesQr = conexionesQr;
  }

  getConexionQrSeleccionada() {
    return this.options.flujoQr.conexionQrSeleccionada;
  }

  setConexionQrSeleccionada(
    conexionQrSeleccionada: IntConexionesDeuda | undefined
  ) {
    this.options.flujoQr.conexionQrSeleccionada = conexionQrSeleccionada;
  }

  getFacturasQr(): IntFacturasLink[] {
    return this.options.flujoQr.facturasQr;
  }

  setFacturasQr(facturasQr: IntFacturasLink[]) {
    this.options.flujoQr.facturasQr = facturasQr;
  }

  getFacturaQrSeleccionada(): IntFacturasLink | undefined {
    return this.options.flujoQr.facturaQrSeleccionada;
  }

  setFacturaQrSeleccionada(facturaQrSeleccionada: IntFacturasLink | undefined) {
    this.options.flujoQr.facturaQrSeleccionada = facturaQrSeleccionada;
  }
}
