// Import Angular modules
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


/*
* @Component: ConfigComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
*/

@Component({
  selector: 'app-root',
  templateUrl: '../templates/config.html'
})

export class ConfigComponent {
  public session: Object;
  public feed: string;
  public keywords: string;
  public config = {
    feeds: [],
    keywords: []
  };

  constructor(private store: Store<any>) {
    store.select('session').subscribe(session => this.session = session);
  }

  addToFeeds() {
    if (this.feed !== '') {
      this.config['feeds'].push(this.feed);
      this.feed = '';
    }
  }

  removeFromFeeds(feed) {
    const index = this.config['feeds'].indexOf(feed);
    this.config['feeds'].splice(index, 1);
  }

  addKeywords() {
    if (this.keywords !== '') {
      const keyword_array = this.keywords.split(',');
      
      for (let i = 0; i < keyword_array.length; i++) {
        this.config['keywords'].push(keyword_array[i]);
      } 
           
      this.keywords = '';
    }
  }

  removeFromKeywords(feed) {
    const index = this.config['keywords'].indexOf(feed);
    this.config['keywords'].splice(index, 1);
  }
}
