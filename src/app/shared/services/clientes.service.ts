import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  ClientesService {

  private cliente: any = {};

  constructor(
    private http: HttpClient,
  ) {}

  getClienteDeDocumento(nroDocumento: string): Observable<any> {
    if (this.cliente.documento) return of(this.cliente);

    const url = environment.publicApiRestUrl + 'clientededocumento/' + nroDocumento;
    return this.http.get(url).pipe(
        tap( (cliente) => { 
          this.cliente = cliente;
        }) );
  }
}
