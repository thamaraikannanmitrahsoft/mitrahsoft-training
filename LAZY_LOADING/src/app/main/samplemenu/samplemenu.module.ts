import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplemenuComponent } from './samplemenu.component';
import { RouterModule, Routes } from '@angular/router';
import { sampleTime } from 'rxjs';


const routes: Routes = [
  {
    path: '', component: SamplemenuComponent,
    children: [
      { path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
      { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) }
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
