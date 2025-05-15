import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'manageuser', loadChildren: () => import('./usermanagement/usermanagement.module').then(m => m.UsermanagementModule) },
      { path: 'samplemenu', loadChildren: () => import('./samplemenu/samplemenu.module').then(m => m.SamplemenuModule) }
    ]
  }
];
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }