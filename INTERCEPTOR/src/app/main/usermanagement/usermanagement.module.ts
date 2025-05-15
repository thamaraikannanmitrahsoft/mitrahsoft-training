import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermanagementComponent } from './usermanagement.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: UsermanagementComponent,
    children: [
      { path: 'showdetails', loadChildren: () => import('./showdetails/showdetails.module').then(m => m.ShowdetailsModule) },
      { path: 'managedetails', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) }
    ]
  }
];
@NgModule({
  declarations: [
    UsermanagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsermanagementModule { }
