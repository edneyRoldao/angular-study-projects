
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isRemembered: boolean;

  constructor() {
    this.isRemembered = false;
  }

  onLogin(event) {
    console.log('login fired', event, this.isRemembered);

  }

  onSignUp(event) {
    console.log('sign up fired', event);
    
  }

  rememberUser(event) {
    this.isRemembered = event;
    console.log(event);
  }

}

