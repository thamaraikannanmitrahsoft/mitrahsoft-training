import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowdetailsComponent } from './showdetails.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShowdetailsComponent}
];
@NgModule({
  declarations: [
    ShowdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShowdetailsModule { }