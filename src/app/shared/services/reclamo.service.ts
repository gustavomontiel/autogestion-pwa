import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {


  constructor(
    private http: HttpClient
  ) { }

  getAsuntos() {
    const url = environment.publicApiRestUrl + 'reclamos/asuntos';
    return this.http.get(url,);
  }

  getReclamosAbiertos(nroConexion: number, motivo: number) {
    const url = environment.publicApiRestUrl + 'reclamosAbiertos/' + nroConexion + '/' + motivo;
    return this.http.get(url,);
  }

  saveReclamo(reclamo: any) {
    const headers = new HttpHeaders({
    });
    const url = environment.publicApiRestUrl + 'reclamos';
    return this.http.post(url, { headers }, reclamo);
  }

  repeatReclamo(reiteracion: any) {
    const url = environment.publicApiRestUrl + 'reiteracionReclamo';
    return this.http.post(url, reiteracion);
  }

}
