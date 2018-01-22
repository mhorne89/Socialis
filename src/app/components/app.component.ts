// Import Angular modules
import { Component } from '@angular/core';


/*
* @Component: AppComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
*/

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.html'
})

export class AppComponent {
  constructor() {
    
  }
}
