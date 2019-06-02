import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `

    <div class="container mt-5">
        <div class="jumbotron justify-content-center d-flex">
            <h3> {{ title }} </h3>
            <h3> Angular material and bootstrap 4 config are included. </h3>
        </div>
    </div>

  `
})
export class AppComponent {

    title = ' The angular project that has been created and it is working properly ';

}

