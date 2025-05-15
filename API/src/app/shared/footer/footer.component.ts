import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../core/services/userdetails.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  constructor(private Userdetails: UserdetailsService) { }
  user!: any[];
  userId!: string;
  email!: String;
  mobileNumber!: string;
  ngOnInit(): void {
    this.getContactDetails()
  }
  getContactDetails() {
    this.Userdetails.getAllUsers().subscribe((response: any) => {
      if (response.code == 200) {
        this.user = response.data
        this.userId = localStorage.getItem('id') || '';
        if (this.userId) {
          const matchedUser = this.user.filter(users => users.id == this.userId)
          if (matchedUser.length > 0) {
            this.email = matchedUser[0].COD_EMAIL;
            this.mobileNumber = matchedUser[0].COD_MOBILE;
          }
        }
      }
    })
  }
}