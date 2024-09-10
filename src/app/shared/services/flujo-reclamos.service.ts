import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IntConexionesDeuda } from '../interfaces/conexiones-deuda.interface';

@Injectable({
  providedIn: 'root'
})
export class FlujoReclamosService {
  constructor(private http: HttpClient) {}

  // TODO
  getConexionesReclamos(
    nroDocumento: string
  ): Observable<IntConexionesDeuda[]> {
    const url = `${environment.publicApiRestUrl}/conexiones/${nroDocumento}`;
    return this.http.get<IntConexionesDeuda[]>(url);
  }
}
