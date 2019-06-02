
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

          <!-- moving a component at run time -->
          <button (click)="moveComponent()" class="mr-2">MOVE</button>
          
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

    constructor(private resolver: ComponentFactoryResolver) { }


    ngAfterContentInit() {
        const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);

        // creating two components with specific order
        // by default index is -1
        this.entry.createComponent(authFormFactory);

        // this component will be the first
        this.component = this.entry.createComponent(authFormFactory, 0);

        this.component.instance.title = 'Create Account';

        this.component.instance.submitted.subscribe((user: User) => {
          console.log(user);
        })
    }


    moveComponent() {
        this.entry.move(this.component.hostView, 1);
    }


    destroyComponent() {
      this.component.destroy();
    }


}

