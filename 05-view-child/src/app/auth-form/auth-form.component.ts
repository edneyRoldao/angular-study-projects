import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    AfterContentInit,
    ContentChild,
    AfterViewInit,
    ViewChild,
    ViewChildren,
    QueryList} from '@angular/core';

import { AuthRememberComponent } from "./auth-remember/auth-remember.component";
import {AuthMessageComponent} from "./auth-message/auth-message.component";
import {AuthErrorComponent} from "./auth-error/auth-error.component";

@Component({
  selector: 'auth-form',
  template: `
      <div>
          <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">

              <!-- Here will be injected forms title from an external component. -->
              <ng-content select="h4"></ng-content>
              
              
              <!-- start - viewChildren and queryLists example -->
              <auth-error style="background: red; color: black; font-weight: bold" 
                          [style.display]="(showMessage ? 'block' : 'none')">
              </auth-error>
              
              <auth-error style="background: red; color: black; font-weight: bold" 
                          [style.display]="(showMessage ? 'block' : 'none')">
              </auth-error>
              
              <auth-error style="background: red; color: black; font-weight: bold" 
                          [style.display]="(showMessage ? 'block' : 'none')">
              </auth-error>
              <!-- end - viewChildren and queryLists example -->

              
              <label>
                  Email address
                  <input type="email" name="email" ngModel>
              </label>
              <label>
                  Password
                  <input type="password" name="password" ngModel>
              </label>
              <br>
              <ng-content select="auth-remember"></ng-content>

              <auth-message [style.display]="(showMessage ? 'block' : 'none')"></auth-message>

              <ng-content select="button"></ng-content>
          </form>
      </div>
  `
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild(AuthMessageComponent)
  message: AuthMessageComponent;

  @ViewChildren(AuthErrorComponent)
  errors: QueryList<AuthErrorComponent>;

  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;

  @Output()
  submitted: EventEmitter<User>;

  constructor() {
    this.showMessage = false;
    this.submitted = new EventEmitter<User>();
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }

    if (this.remember) {
      this.remember.checked.subscribe((data: boolean) => {
        this.showMessage = data;
      });
    }
  }

  ngAfterViewInit() {
      // we can change children components here.
      if (this.errors) {

          this.errors.forEach((error) => {
             // error.errorMessage = 'error message has been changed from parent component';
          });

      }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}

export interface User {
    email: string;
    password: string;
}
