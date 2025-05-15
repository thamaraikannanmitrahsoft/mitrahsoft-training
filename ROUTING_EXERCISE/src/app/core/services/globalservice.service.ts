import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  users: { email: string, password: string }[] = [];
  token = 'SGVsbG8gdGhpcyBzdHJpbmcgaXMgZW5jcnlwdGVk';
  isLoggedIn = false;
}