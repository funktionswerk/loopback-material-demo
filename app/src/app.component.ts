import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.pug')()
})
export class AppComponent  {
  public name = 'Angular';

  public onButtonClicked(): void {
    console.log('CLICKED');
  }

}
