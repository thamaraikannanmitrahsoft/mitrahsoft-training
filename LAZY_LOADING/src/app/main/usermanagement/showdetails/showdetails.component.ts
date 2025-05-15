import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.scss'
})
export class ShowdetailsComponent implements OnInit {
  userData!: any[];
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '[]');
  }
}