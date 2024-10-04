import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  LocalidadesService {

  private localidades: any[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  getLocalidades(): Observable<any> {
    if (this.localidades.length) return of(this.localidades);

    const url = environment.publicApiRestUrl + 'localidades';
    return this.http.get(url).pipe(
        tap( (localidades) => { 
          this.localidades = (localidades as any[]);
        }) );
  }

  getLocalidadPorId(idLocalidad: string){
    if (!idLocalidad) return this.localidades;

    return this.localidades.find( oficina => oficina.idLocalidad === idLocalidad)
  }
}
