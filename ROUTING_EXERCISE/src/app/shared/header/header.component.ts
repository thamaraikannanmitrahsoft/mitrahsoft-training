import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  user!: any[];
  userId!: string;
  displayName!: string;
  profilePic!: string;
  constructor(private router: Router, private toastr: ToastrService) {
    this.getname()
  }
  ngOnInit(): void {
    this.getname()
  }
  getname() {
    this.user = JSON.parse(localStorage.getItem('userData') || '[]');
    this.userId = localStorage.getItem('loggedInUser') || '';
    if (this.userId) {
      const matchedUser = this.user.filter(users => users.id == this.userId)
      if (matchedUser.length > 0) {
        this.displayName = matchedUser[0].name
        this.profilePic = matchedUser[0].profilepic
      }
    }
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
    this.toastr.success("You've been successfully logged out", '', {
      timeOut: 1000
    });
  }
}