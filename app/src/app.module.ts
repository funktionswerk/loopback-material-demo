import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {SDKBrowserModule} from '../sdk/index';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LBLoginComponent} from './components/auth/login';
import {LoginViewComponent} from './components/views/Login';
import {DashboardViewComponent} from './components/views/Dashboard';
import {PageNotFoundViewComponent} from './components/views/PageNotFound';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    SDKBrowserModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LBLoginComponent,
    DashboardViewComponent,
    LoginViewComponent,
    PageNotFoundViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
