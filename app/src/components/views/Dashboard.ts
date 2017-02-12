import {Component} from '@angular/core';

@Component({
  template: require('./Dashboard.pug')
})
export class DashboardViewComponent {
  public static path = 'dashboard';
}
