import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
      <div class="container">
          <div>
              <button (click)="addProp()">Add property</button>
              <button (click)="changeUser()">Change user object</button>
              <button (click)="changeName()">Change name property</button>
              <div>
                  <on-push [user]="user"></on-push>
                  <default [user]="user"></default>
              </div>
          </div>
      </div>
  `,
})
export class AppComponent {

    user: any = {
        name: 'Nadine Roldao',
        age: 16,
        location: 'California'
    };

    addProp() {
        this.user.email = 'vncrs@mail.net';
    }

    changeName() {
        this.user.name = 'Giselle';
    }

    changeUser() {
        this.user = {
            name: 'Draco Malfoy',
            age: 2,
            location: 'California'
        };
    }

}
