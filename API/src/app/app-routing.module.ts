import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./shared/register/register.module').then(m => m.RegisterModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [authGuard] },
  { path: '404notfound', component: NotFoundComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }