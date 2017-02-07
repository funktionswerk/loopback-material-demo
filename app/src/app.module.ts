import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {LBLoginComponent} from './components/auth/login';

@NgModule({
  imports:      [BrowserModule, MaterialModule.forRoot()],
  declarations: [AppComponent, LBLoginComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
