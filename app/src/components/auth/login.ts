import {Component} from '@angular/core';
import {UserApi} from '../../../sdk/services';

interface ICredentials {
  email?: string;
  password?: string;
}

@Component({
  selector: 'loopback-login',
  template: require('./login.pug')
})
export class LBLoginComponent  {
  email: string;
  password: string;

  constructor(private User: UserApi) {
  }

  public onLogin(): void {
    this.User.login({
      email: this.email,
      password: this.password
    }).toPromise().then(() => {
      console.log('LOGIN DONE');
    });
    console.log('LOGGING IN');
  }

}
