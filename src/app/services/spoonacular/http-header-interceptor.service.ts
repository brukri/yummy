import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import {apiKey} from '../apiKey';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderInterceptorService implements HttpInterceptor {
  headers: HttpHeaders;

  constructor() {
    this.headers = new HttpHeaders({
      'X-Mashape-Key' : apiKey,
      'X-Mashape-Host' :  'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const updateRequest = req.clone({
      headers: this.headers
    });
    return next.handle(updateRequest);
  }
}
