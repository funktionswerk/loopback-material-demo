import {Component, Input} from '@angular/core';
import {UserApi} from '../../../sdk/services';
import {Router} from '@angular/router';

interface ICredentials {
  email?: string;
  password?: string;
}

@Component({
  selector: 'loopback-login',
  template: require('./login.pug')
})
export class LBLoginComponent  {
  public email: string;
  public password: string;
  @Input() nextAfterLogin: string;

  constructor(
    private User: UserApi,
    private router: Router
  ) {
  }

  public onLogin(): void {
    this.User.login({
      email: this.email,
      password: this.password
    }).toPromise().then(() => {
      console.log('LOGIN DONE');
      //TODO: This should be handled by the view ctrl
      this.router.navigate([this.nextAfterLogin]);
    });
    console.log('LOGGING IN');
  }

}
