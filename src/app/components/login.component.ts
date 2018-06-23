// Import Angular modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  public user = {
    email: null,
    password: null
  };

  constructor(private http: HttpService, private router: Router) {}
  
  public loginUser() {
    if (!this.user.email)
      return this.notification = { type: 'error', payload: 'Please enter your email' };
    
    if (!this.user.password)
      return this.notification = { type: 'error', payload: 'Please enter a valid password' };
    
    this.http.loginUser(this.user).subscribe(
      res => this.router.navigate(['/config']),
      err => this.notification = { type: 'error', payload: err }
    );
  }
}
