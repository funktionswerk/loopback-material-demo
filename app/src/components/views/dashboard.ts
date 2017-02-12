import {Component} from '@angular/core';

@Component({
  template: require('./dashboard.pug')
})
export class DashboardViewComponent {
  public static path = 'dashboard';
}
