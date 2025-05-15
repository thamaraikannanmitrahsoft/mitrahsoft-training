import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../environments/environments';
import { ToastrService } from 'ngx-toastr';
import { catchError, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  responseData: any[] = [];
  baseURL = Environments.baseURL;
  token!: string;
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {
  }
  httpGet(url: string) {
    return this.http.get(this.baseURL + url)
  }
  httpPostWithoutHeader(url: string, data: any) {
    this.token = localStorage.getItem('token') || 'null';
    return this.http.post(this.baseURL + url, data);
  }
  httpPost(url: string, data: any) {
    return this.http.post(this.baseURL + url, data);
  }
  httpPut(url: string, data: any) {
    return this.http.put(this.baseURL + url, data);
  }
  httpDelete(url: string, data?: any) {
    return this.http.delete(this.baseURL + url, data);
  }
}