import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CommonService {
  login(data: any) {
    return this.httpPostWithoutHeader(`/login`, data)
  }
}