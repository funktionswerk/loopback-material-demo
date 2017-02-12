import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {SDKBrowserModule} from '../sdk/index';

import {AppComponent}  from './app.component';
import {AppRoutingModule, AppViewComponents} from './app-routing.module';
import {LBLoginComponent} from './components/auth/login';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    SDKBrowserModule.forRoot(),
    AppRoutingModule
  ],
  declarations: AppViewComponents.concat([
    AppComponent,
    LBLoginComponent
  ]),
  bootstrap: [AppComponent]
})
export class AppModule { }
