import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import packageJson from '../../../../package.json';
const versionApp = packageJson.version;

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesAppService {
  constructor(private http: HttpClient) {}

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  getEstadoVersionApp(): Observable<any> {
    const version = versionApp;
    const url =
      environment.publicApiRestUrl +
      'configuraciones-app/estado-version/' +
      version;
    return (
      this.http
        .get(url)
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        .pipe(map((configuraciones: any) => configuraciones[0]))
    );
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  getConfiguracionBotonesHome(): Observable<any> {
    const url = `${environment.publicApiRestUrl}/configuraciones-app/botones-home`;
    return this.http.get(url);
  }
}
