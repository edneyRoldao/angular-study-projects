
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onLogin(event) {
    console.log('login fired', event);

  }

  onSignUp(event) {
    console.log('sign up fired', event);
    
  }

}

