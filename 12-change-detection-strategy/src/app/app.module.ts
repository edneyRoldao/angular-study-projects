import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialCustomModule } from './angular-material-custom.module';

import { AppComponent } from './app.component';
import {DefaultComponent} from "./default/default.component";
import {OnPushComponent} from "./on-push/on-push.component";

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OnPushComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
