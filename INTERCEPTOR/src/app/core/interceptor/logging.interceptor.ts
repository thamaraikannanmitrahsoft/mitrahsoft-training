import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() { }
  existingLogs!: any[];
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
    })
    this.existingLogs = JSON.parse(localStorage.getItem('requestData') || '[]')
    const httprequestlog = {
      method: modifiedRequest.method,
      url: modifiedRequest.url,
      body: modifiedRequest.body
    }
    this.existingLogs.push(httprequestlog);
    localStorage.setItem('requestData', JSON.stringify(this.existingLogs));
    return next.handle(modifiedRequest);
  }
}