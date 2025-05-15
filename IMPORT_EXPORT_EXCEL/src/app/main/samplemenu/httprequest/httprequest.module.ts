import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttprequestComponent } from './httprequest.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HttprequestComponent }
];
@NgModule({
  declarations: [
    HttprequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HttprequestModule { }
