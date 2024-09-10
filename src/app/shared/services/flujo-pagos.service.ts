import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IntConexionesDeuda } from '../interfaces/conexiones-deuda.interface';
import { IntFacturasPendiente } from '../interfaces/facturas-pendientes.interface';

@Injectable({
  providedIn: 'root'
})
export class FlujoPagosService {
  constructor(private http: HttpClient) { }

  getConexionesDeuda(nroDocumento: string): Observable<IntConexionesDeuda[]> {
    const url = `${environment.publicApiRestUrl}/conexiones/${nroDocumento}`;
    return this.http.get<IntConexionesDeuda[]>(url);
  }

  getFacturasPendientes(
    nroDocumento: string,
    nroConexion: string
  ): Observable<IntFacturasPendiente[]> {
    const url = `${environment.publicApiRestUrl}/facturaspendientes/${nroDocumento}/${nroConexion}`;
    return this.http.get<IntFacturasPendiente[]>(url);
  }


}
