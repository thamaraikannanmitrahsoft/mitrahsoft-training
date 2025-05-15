import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss'
})
export class UsermanagementComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onshowdetails() {
    this.router.navigate(['main/manageuser/showdetails']);
  }
  onManageUser() {
    this.router.navigate(['main/manageuser/managedetails']);
  }
}