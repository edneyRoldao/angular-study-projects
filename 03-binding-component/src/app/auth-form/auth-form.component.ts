import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Output()
  submitted: EventEmitter<User>;

  constructor() { 
    this.submitted = new EventEmitter<User>();
  }

  ngOnInit() {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
