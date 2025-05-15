import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelStatusComponent } from './excel-status.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '', component: ExcelStatusComponent
  }
];
@NgModule({
  declarations: [
    ExcelStatusComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExcelStatusModule { }
