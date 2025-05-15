import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends CommonService {
  register(data: any) {
    return this.httpPostWithoutHeader(`/Register`, data)
  }
}