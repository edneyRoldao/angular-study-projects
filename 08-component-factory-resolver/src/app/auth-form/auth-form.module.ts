import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from "./auth-remember/auth-remember.component";
import {AuthMessageComponent} from "./auth-message/auth-message.component";
import {AuthErrorComponent} from "./auth-error/auth-error.component";

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    AuthErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    AuthErrorComponent
  ],
  entryComponents: [
    AuthFormComponent
  ]
})
export class AuthFormModule { }
