import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplemenuComponent } from './samplemenu.component';
import { RouterModule, Routes } from '@angular/router';
import { sampleTime } from 'rxjs';


const routes: Routes = [
  {
    path: '', component: SamplemenuComponent,
    children: [
      { path: 'httprequestDetails', loadChildren: () => import('./httprequest/httprequest.module').then(m => m.HttprequestModule) },
    ]
  }
];
@NgModule({
  declarations: [
    SamplemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SamplemenuModule { }
