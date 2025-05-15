import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) { }
  handleError(error: any) {
    const sessionexpiredError = error.error
    if (sessionexpiredError.code == 403) {
      localStorage.clear()
      this.toastr.error('Session Expired', '', {
        timeOut: 3000
      });
      this.router.navigate(['/login']);
    }
    return throwError(() => new Error('Something went wrong... Please login again.'));
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    const modifiedHeader = request.clone({
      setHeaders: {
        Authorization: 'Bearer' + ' ' + token
      }
    })
    return next.handle(modifiedHeader).pipe(catchError(this.handleError.bind(this)))
  }
}