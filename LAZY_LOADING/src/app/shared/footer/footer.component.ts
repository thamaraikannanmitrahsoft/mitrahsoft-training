import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  user!: any[];
  userId!: string;
  email!: String;
  mobileNumber!: string;
  ngOnInit(): void {
    this.getContactDetails()
  }
  getContactDetails() {
    this.user = JSON.parse(localStorage.getItem('userData') || '[]');
    this.userId = localStorage.getItem('loggedInUser') || '';
    if (this.userId) {
      const matchedUser = this.user.filter(users => users.id == this.userId)
      if (matchedUser.length > 0) {
        this.email = matchedUser[0].email
        this.mobileNumber = matchedUser[0].mobileNumber
      }
    }
  }
}