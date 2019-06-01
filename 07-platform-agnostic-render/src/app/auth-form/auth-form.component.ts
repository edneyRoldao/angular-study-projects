import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    AfterContentInit,
    ContentChild,
    AfterViewInit,
    ViewChild,
    ElementRef, Renderer2
} from '@angular/core';

import { AuthRememberComponent } from "./auth-remember/auth-remember.component";
import {AuthMessageComponent} from "./auth-message/auth-message.component";

@Component({
  selector: 'auth-form',
    styles: [`
        .email {
            border: solid 3px #9f72e6;
        }
    `],
  template: `
      <div>
          <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">

              <!-- Here will be injected forms title from an external component. -->
              <ng-content select="h4"></ng-content>
              
              <label>
                  Email address
                  <input type="email" name="email" ngModel #email>
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

    @ViewChild('email')
    email: ElementRef;

    showMessage: boolean;

    @ViewChild(AuthMessageComponent)
    message: AuthMessageComponent;

    @ContentChild(AuthRememberComponent)
    remember: AuthRememberComponent;

    @Output()
    submitted: EventEmitter<User>;

    constructor(private render: Renderer2) {
        this.showMessage = false;
        this.submitted = new EventEmitter<User>();
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.render.addClass(this.email.nativeElement, 'email');

        this.render.listen(this.email.nativeElement, 'focus', ((event) => {
            console.log('I am listen to an event via render2', event);
        }));

        this.render.selectRootElement(this.email.nativeElement).focus();

        this.render.setAttribute(this.email.nativeElement, 'placeholder', 'enter your email dfggf');

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

    }

    onSubmit(value: User) {
        this.submitted.emit(value);
    }

}

export interface User {
    email: string;
    password: string;
}
