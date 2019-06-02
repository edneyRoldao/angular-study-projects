
import {
    Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit,
    ComponentRef
} from '@angular/core';
import {AuthFormComponent, User} from "./auth-form/auth-form.component";

@Component({
  selector: 'app-root',
  styles: [],
  template: `
      <div class="container">

          <!-- creating component dynamically -->
          <button (click)="destroyComponent()">DESTROY</button>
          <div>
              <div #entry></div>
          </div>
          

      </div>
  `,
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef })
  entry: ViewContainerRef;

  component: ComponentRef<AuthFormComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngAfterContentInit() {

    // creating component
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);

    // passing data to component that has been created dynamically.
    this.component.instance.title = 'Create Account';

    // subscribing to an output attribute from dynamic component
    this.component.instance.submitted.subscribe((user: User) => {
      console.log(user);
    })

  }

    destroyComponent() {
      this.component.destroy();
    }


}

