import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../environments/environments';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL = Environments.baseURL;
  token!: string;
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {
  }
  getHeader() {
    this.token = localStorage.getItem('token') || 'null';
    return new HttpHeaders({
      Authorization: 'Bearer' + ' ' + this.token
    })
  }
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
  httpGet(url: string) {
    var object: any = {}
    object.headers = this.getHeader()
    return this.http.get(this.baseURL + url, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  httpPostWithoutHeader(url: string, data: any) {
    this.token = localStorage.getItem('token') || 'null';
    return this.http.post(this.baseURL + url, data).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  httpPost(url: string, data: any) {
    var object: any = {}
    object.headers = this.getHeader()
    object.body = data
    return this.http.post(this.baseURL + url, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  httpPut(url: string, data: any) {
    var object: any = {}
    object.headers = this.getHeader()
    object.body = data
    return this.http.put(this.baseURL + url, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  httpDelete(url: string, data?: any) {
    var object: any = {}
    object.headers = this.getHeader()
    object.body = data
    return this.http.delete(this.baseURL + url, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}