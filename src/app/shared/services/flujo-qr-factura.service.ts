import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IntConexionesDeuda } from '../interfaces/conexiones-deuda.interface';
import { IntFacturasLink } from '../interfaces/facturas-link.interface';

@Injectable({
  providedIn: 'root'
})
export class FlujoQrFacturaService {
  constructor(private http: HttpClient) { }

  // TODO
  getConexionesFactura(nroDocumento: string): Observable<IntConexionesDeuda[]> {
    const url = `${environment.publicApiRestUrl}/conexiones/${nroDocumento}`;
    return this.http.get<IntConexionesDeuda[]>(url);
  }

  getUltimasFacturas(
    nroDocumento: string,
    nroConexion: string
  ): Observable<IntFacturasLink[]> {
    const url = `${environment.publicApiRestUrl}/ultimasfacturas/${nroDocumento}/${nroConexion}`;
    return this.http.get<IntFacturasLink[]>(url);
  }

  enviarFacturaPorMail(nroDocumento: string, idComprobante: string) {
    const url = environment.publicApiRestUrl + '/enviaremailfactura/' + nroDocumento + '/' + idComprobante;
    return this.http.get(url);
  }
}
