// Import Angular modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

// Import services
import { HttpService } from '../services/http.service';


/*
* @Component: RegisterComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
*/

@Component({
  selector: 'app-root',
  templateUrl: '../templates/register.html'
})

export class RegisterComponent {
  public notification: Object;
  public session: Object;
  public user = {
    first_name: null,
    last_name: null,
    email: null,
    password: null
  };

  constructor(private http: HttpService, private router: Router, private store: Store<any>) {
    store.select('session').subscribe(session => this.session = session);

    if (this.session)
      this.router.navigate(['/config']);
  }

  public registerUser() {
    if (!this.user.first_name)
      return this.notification = { type: 'error', payload: 'Please enter your first name' };

    if (!this.user.last_name)
      return this.notification = { type: 'error', payload: 'Please enter your last name' };

    if (!this.user.email)
      return this.notification = { type: 'error', payload: 'Please enter your email' };

    if (!this.user.password)
      return this.notification = { type: 'error', payload: 'Please enter a valid password' };

    this.http.registerUser(this.user).subscribe(
      session => {
        this.store.dispatch({ type: 'SET_SESSION', payload: JSON.parse(session['_body']) });
        this.router.navigate(['/config']);
      },
      err => this.notification = { type: 'error', payload: JSON.parse(err._body).message }
    );
  }
}
