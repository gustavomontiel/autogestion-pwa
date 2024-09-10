import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoCerrarService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTimers() {
    const headers = new HttpHeaders({
      'X-Emsa-Api-Key': '123',
    });

    const url = environment.publicApiRestUrl + 'timers'
    return this.http.get(url, { headers });
  }
}
