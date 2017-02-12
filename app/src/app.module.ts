import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {SDKBrowserModule} from '../sdk/index';

import {AppComponent}  from './app.component';
import {AppRoutes} from './app-routes.module';
import {LBLoginComponent} from './components/auth/login';
import {LoginViewComponent} from './components/views/login';
import {DashboardViewComponent} from './components/views/dashboard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  declarations: [AppComponent, LBLoginComponent, DashboardViewComponent, LoginViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
