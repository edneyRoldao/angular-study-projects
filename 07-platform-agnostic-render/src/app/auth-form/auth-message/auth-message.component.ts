import {Component} from "@angular/core";

@Component({
    selector: 'auth-message',
    template: `
        <div>
            you will be logged in for {{ days }} days
        </div>
    `
})
export class AuthMessageComponent {

    days: number;

    constructor() {
        this.days = 7;
    }

}
