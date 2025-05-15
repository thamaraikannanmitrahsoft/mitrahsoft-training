import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samplemenu',
  templateUrl: './samplemenu.component.html',
  styleUrl: './samplemenu.component.scss'
})
export class SamplemenuComponent {
  constructor(private router: Router) { }
  onShowResponse() {
    this.router.navigate(['main/apiInfo/httprequestDetails']);
  }
}