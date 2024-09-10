import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public toastService: ToastService) {}

  intercept(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    request: HttpRequest<any>,
    next: HttpHandler
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status == 0) {
          this.toastService.presentToast(
            'Verifique si tiene conectividad',
            'danger'
          );
        }
        if (err.status === 404) {
          const msg = `No se encuentra el recurso: ${err.url}`;
          this.toastService.presentToast(msg, 'danger');
        }
        return throwError(() => err);
      })
    );
  }
}
