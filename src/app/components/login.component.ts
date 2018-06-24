// Import Angular modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

// Import services
import { HttpService } from '../services/http.service';


/*
* @Component: LoginComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
*/

@Component({
  selector: 'app-root',
  templateUrl: '../templates/login.html'
})

export class LoginComponent {
  public notification: Object;
  public session: Object;
  public user = {
    email: null,
    password: null
  };

  constructor(private http: HttpService, private router: Router, private store: Store<any>) {
    store.select('session').subscribe(session => this.session = session);
    
    if (this.session)
      this.router.navigate(['/config']);
  }
  
  public loginUser() {
    if (!this.user.email)
      return this.notification = { type: 'error', payload: 'Please enter your email' };
    
    if (!this.user.password)
      return this.notification = { type: 'error', payload: 'Please enter a valid password' };
    
    this.http.loginUser(this.user).subscribe(
      session => {
        this.store.dispatch({ type: 'SET_SESSION', payload: JSON.parse(session['_body']) });
        this.router.navigate(['/config']);
      },
      err => this.notification = { type: 'error', payload: JSON.parse(err._body).message }
    );
  }
}
