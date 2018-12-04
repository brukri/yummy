import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import {apiKey} from '../apiKey';
import { tap, map, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderInterceptorService implements HttpInterceptor {
  headers: HttpHeaders;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const updateRequest = req.clone({
      headers: req.headers.set('X-RapidAPI-Key', apiKey)
    });

    return next.handle(updateRequest).pipe(
      catchError(err => {
        if (err.status === 400) {
          return empty();
        }
      })
    );
  }
}
