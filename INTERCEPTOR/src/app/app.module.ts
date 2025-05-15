import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './shared/not-found/not-found.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor } from './core/interceptor/logging.interceptor';
import { HeaderInterceptor } from './core/interceptor/headers.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }