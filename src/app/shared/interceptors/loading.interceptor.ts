import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    request: HttpRequest<any>,
    next: HttpHandler
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    this.loadingService.present();
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.dismiss();
      })
    );
  }
}
