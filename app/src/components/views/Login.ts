import {Component} from '@angular/core';
import {Route} from '@angular/router';

@Component({
  template: require('./Login.pug')
})
export class LoginViewComponent {
  public static routeConfig: Route = {
    path: 'login',
    component: LoginViewComponent
  }
  public nextAfterLogin = '/dashboard';
}
