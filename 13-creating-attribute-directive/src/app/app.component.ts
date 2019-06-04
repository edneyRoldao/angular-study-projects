import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `

    <div class="container mt-5">
    
        <label>
            Credit card number
            <input type="text" 
                   name="credit-card" 
                   placeholder="enter your credit card number" 
                   credit-card>
        </label>
    
    </div>

  `
})
export class AppComponent {

}

