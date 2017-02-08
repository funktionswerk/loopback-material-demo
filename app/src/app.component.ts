import {Component} from '@angular/core';
import {LoopBackConfig} from '../sdk/index';

@Component({
  selector: 'my-app',
  template: require('./app.component.pug')
})
export class AppComponent  {
  public name = 'Angular';

  constructor() {
    LoopBackConfig.setBaseURL('http://localhost:3000');
    LoopBackConfig.setApiVersion('api');
  }

  public onButtonClicked(): void {
    console.log('CLICKED');
  }

}
