import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'auth-remember',
    template: `
        <label>
            <input type="checkbox" (change)="onChecked($event.target.checked)">
            Keep me logged in
        </label>
    `
})
export class AuthRememberComponent {

    @Output()
    checked: EventEmitter<boolean>;

    constructor() {
        this.checked = new EventEmitter<boolean>();
    }

    onChecked(value: boolean) {
        this.checked.emit(value);
    }

}