import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdetailsService } from '../../core/services/userdetails.service';

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
  constructor(private router: Router, private toastr: ToastrService, private Userdetails: UserdetailsService) {
  }
  ngOnInit(): void {
    this.getname()
  }
  getname() {
    this.Userdetails.getAllUsers().subscribe((response: any) => {
      if (response.code == 200) {
        this.user = response.data
        this.userId = localStorage.getItem('id') || '';
        if (this.userId) {
          const matchedUser = this.user.filter(users => users.id == this.userId)
          if (matchedUser.length > 0) {
            this.displayName = matchedUser[0].COD_NAME;
            this.profilePic = matchedUser[0].COD_PROFILEPIC;
          }
        }
      }
    })
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
    this.toastr.success("You've been successfully logged out", '', {
      timeOut: 1000
    });
  }
}