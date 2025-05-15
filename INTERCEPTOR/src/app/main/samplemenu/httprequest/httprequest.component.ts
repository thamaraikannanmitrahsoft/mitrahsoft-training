import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';
import { Environments } from '../../../core/environments/environments';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrl: './httprequest.component.scss'
})
export class HttprequestComponent implements OnInit {
  constructor(private common: CommonService) { }
  data: any;
  ngOnInit() {
    this.getData()
  }
  getData() {
    const baseURL = Environments.baseURL;
    this.data = JSON.parse(localStorage.getItem('requestData') || '');
    this.data.forEach((element: any) => {
      element.url = JSON.stringify(element.url.split(baseURL))
      element.endpoint = JSON.parse(element.url)
      element.endpoint = element.endpoint[1];
      element.url = baseURL;
    });
  }
}