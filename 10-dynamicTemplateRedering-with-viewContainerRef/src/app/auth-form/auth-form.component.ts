import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'auth-form',
  template: `
      <div>
          <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
              <h4> {{ title }} </h4>
              
              <label>
                  Email address
                  <input type="email" name="email" ngModel #email>
              </label>
              <label>
                  Password
                  <input type="password" name="password" ngModel>
              </label>

              <button type="submit">Login</button>
          </form>
      </div>
  `
})
export class AuthFormComponent {

    title = 'Login';

    @Output()
    submitted: EventEmitter<User>;

    constructor() {
        this.submitted = new EventEmitter<User>();
    }

    onSubmit(value: User) {
        this.submitted.emit(value);
    }

}

export interface User {
    email: string;
    password: string;
}
