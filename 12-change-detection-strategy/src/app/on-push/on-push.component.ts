import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'on-push',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    .example-one {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
    template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      
      <button (click)="update()">Internal update</button>
      <p>* should not update</p>
    </div>
  `
})
export class OnPushComponent {
    @Input()
    user;

    update() {
        this.user.name = 'Marjorie Roldao';
    }

}