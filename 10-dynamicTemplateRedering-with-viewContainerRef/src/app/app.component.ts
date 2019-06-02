
import {Component, ViewChild, ViewContainerRef, AfterContentInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
      <div class="container">

          <div>
              <div #entry></div>
              <ng-template let-name let-location="myLocation" #tmpl>
                  {{ name }} : {{ location }}
              </ng-template>
          </div>
          
      </div>
  `,
})
export class AppComponent implements AfterContentInit {

    @ViewChild('entry', { read: ViewContainerRef })
    entry: ViewContainerRef;

    @ViewChild('tmpl')
    tmpl: TemplateRef<any>;


    ngAfterContentInit() {
        this.entry.createEmbeddedView(this.tmpl, {
            $implicit: 'Edney Roldao',
            myLocation: 'Sao Paulo, BR'
        });
    }

}
