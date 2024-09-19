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
import packageJson from '../../../../package.json';
const versionApp = packageJson.version;

@Injectable()
export class AppVersionInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    request: HttpRequest<any>,
    next: HttpHandler
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    if (this.isExcludedUrl(request.url)) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        'X-Emsa-App-Origen': 'pwa',
        'X-Emsa-App-Version': versionApp,
        'X-Emsa-Api-Key': '123'
      }
    });

    return next.handle(request).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  private isExcludedUrl(url: string): boolean {
    const excludesUrl: RegExp[] = [];
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return excludesUrl.some((regex: any) => regex?.test(url));
  }
}
