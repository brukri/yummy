import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import {apiKey} from '../apiKey';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const updateRequest = req.clone({
      headers: req.headers.set('X-RapidAPI-Key', apiKey)
    });

    return next.handle(updateRequest).pipe(
      catchError(err => {
        if (err.status !== 400) {
          this.router.navigate(['serviceError']);
        }
        return EMPTY;
      })
    );
  }
}
