import {Component} from "@angular/core";

@Component({
    selector: 'auth-error',
    template: `
        <div>
            there was error: {{ errorMessage }}  
        </div>
    `
})
export class AuthErrorComponent {

    errorMessage: string;

    constructor() {
        this.errorMessage = 'test viewChildren and QueryLists message';
    }

}