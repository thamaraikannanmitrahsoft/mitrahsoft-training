import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from '../contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ContactusComponent }
];
@NgModule({
  declarations: [
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactusModule { }