// Import Angular modules
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

/*
* @Injectable: AuthResolver
*
* Route resolvers allow us to provide the needed data for a route, before the route is activated.
* 
* This resolver is called for all routes which the user should not be allowed to view unless they
* are logged in. The resolver checks if a user object is present in the Store. If no user object
* is found, it redirects to user to the login page.
*/

@Injectable()
export class AuthResolver implements Resolve<any> {
  public session: Object;

  constructor(private router: Router, private store: Store<any>) {
    store.select('session').subscribe(session => this.session = session);
  }

  resolve() {
    if (!this.session)
      this.router.navigate(['/login']);
  }
}
