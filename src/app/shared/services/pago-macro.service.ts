import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagoMacroService {
  pendAPagar: any
  importe: any = 0;
  comprobantes: any = [];
  generarIDTranMulti: any;

  constructor(
    private http: HttpClient

  ) { }

  getIDTranMulti(pendAPagar: any, tipo:any, datosTipo: any = {}) {
    this.pendAPagar = pendAPagar
    this.sumarImporte(pendAPagar);
    this.sumarComprobante(pendAPagar);

    const body = {
      "Documento": pendAPagar[0].Documento,
      "Importe": this.importe,
      "Comprobantes": this.comprobantes,
      "Origen": "pwa",
      "Tipo": tipo,
      "DatosTipo": datosTipo,
      "MedioPago": "MACRO"
    }

    const url = environment.publicApiRestUrlEMSA + 'generarIDTranMulti';
    return this.http.post(url, body)
  }

  sumarImporte(pendAPagar: any) {
    this.importe = 0
    pendAPagar.forEach((pendiente: any) => {
      this.importe += parseFloat(pendiente.Importe);
    });
  }

  sumarComprobante(pendAPagar: any) {
    this.comprobantes = []
    pendAPagar.forEach((pendiente: any) => {
      this.comprobantes.push({ "TipoComprobante": pendiente.TipoComprobante, "IdComprobante": pendiente.IdComprobante });
    });
  }


}

