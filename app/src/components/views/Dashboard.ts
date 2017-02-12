import {Component} from '@angular/core';
import {Route} from '@angular/router';

@Component({
  template: require('./Dashboard.pug')
})
export class DashboardViewComponent {
  public static routeConfig: Route = {
    path: 'dashboard',
    component: DashboardViewComponent
  }
}
