import {Component} from '@angular/core';

@Component({
  selector: 'loopback-login',
  template: require('./login.pug')()
})
export class LBLoginComponent  {
  public name = 'Login';

  public onButtonClicked(): void {
    console.log('CLICKED');
  }

}
