
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
      <div class="container">
          <div>
              
              <ng-container [ngTemplateOutlet]="tmpl" 
                            [ngTemplateOutletContext]="context">
              </ng-container>
              
              <ng-template let-name let-location="myLocation" #tmpl>
                  Edney Roldao: São Paulo, BR
                  <br>
                  {{ name }} : {{ location }}
              </ng-template>
              
          </div>
      </div>
  `,
})
export class AppComponent {

    context = {
        $implicit: 'Edney Roldão',
        myLocation: 'São Paulo, BR'
    }


}
