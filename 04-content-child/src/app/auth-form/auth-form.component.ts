import { Component, OnInit, Output, EventEmitter, AfterContentInit, ContentChild } from '@angular/core';
import { User } from './user.interface';
import { AuthRememberComponent } from "./auth-remember/auth-remember.component";

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit, AfterContentInit {

  showMessage: boolean;

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
    if (this.remember) {
      this.remember.checked.subscribe((data: boolean) => {
        this.showMessage = data;
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
