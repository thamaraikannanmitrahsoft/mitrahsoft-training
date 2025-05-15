import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  constructor(private router: Router) { }
  onManageUser() {
    this.router.navigate(['/main/manageuser'])
  }
  onAPI() {
    this.router.navigate(['/main/apiInfo'])
  }
  onshowExcel() {
    this.router.navigate(['/main/excelstatus'])
  }
}