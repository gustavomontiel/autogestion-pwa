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
  ) {  }

  getAsuntos() {
    const headers = new HttpHeaders({
      'X-Emsa-Api-Key': '123',
    });

    const url = environment.publicApiRestUrl + 'reclamos/asuntos';
    return this.http.get(url, { headers });
  }

  getReclamosAbiertos(nroConexion: number, motivo: number) {
    const headers = new HttpHeaders({
      'X-Emsa-Api-Key': '123',
    });
    const url = environment.publicApiRestUrl + 'reclamosAbiertos/' + nroConexion + '/' + motivo;
    return this.http.get(url,{ headers });
  }


  saveReclamo(reclamo: any) {
    const headers = new HttpHeaders({
      'X-Emsa-Api-Key': '123',
    });
    const url = environment.publicApiRestUrl + 'reclamos';
    return this.http.post(url,reclamo);
  }

  repeatReclamo(reiteracion: any) {
    const headers = new HttpHeaders({
      'X-Emsa-Api-Key': '123',
    });
    const url = environment.publicApiRestUrl + 'reiteracionReclamo';
    return this.http.post(url,{ headers }, reiteracion);
  }



}
