import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../../core/services/userdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.scss'
})
export class ShowdetailsComponent implements OnInit {
  constructor(private UserdetailsService: UserdetailsService, private router: Router) { }
  userData!: any[];
  ngOnInit(): void {
    this.UserdetailsService.getAllUsers().subscribe((response: any) => {
      if (response.code == 200) {
        this.userData = response.data;
      }
    })
  };
}