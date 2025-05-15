import { Injectable } from '@angular/core';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService extends CommonService {
  getAllUsers() {
    return this.httpGet(`/getAllUser`)
  }
  addUser(data: any) {
    return this.httpPost(`/addUser`, data)
  }
  editUser(data: any) {
    return this.httpPut(`/editUser`, data)
  }
  deleteUser(id: any) {
    return this.httpDelete(`/deleteUser`, { body: { id } })
  }
}