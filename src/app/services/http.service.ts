// Import Angular modules
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// Import environmental config
import { environment } from '../../environments/environment';


/*
* @Injectable: HttpService
*
* Services are used as a single reusable data service which can be injected into the components
* that require this functionality. Using a separate service keeps components lean and focused on
* supporting the view, and makes it easy to unit-test components with a mock service.
* 
* This service handles http requests to external endpoints, mostly to our backend Node.js app we
* use to avoid exposing sensitive data and backend-api endpoints/authentication procedure to the
* client.
*/

@Injectable()
export class HttpService {
  nodeUrl: string;

  constructor (private http: Http, private location: Location) {
    this.setNodeUrl();
  }

  // Sets Node URL depending on environment
  setNodeUrl() {
    const nodePort = (environment.production) ? '' : ':8081';
    this.nodeUrl = `${ location.protocol }//${ location.hostname }${ nodePort }`;
  }

  /*
  * Posts geofence to backend-api and returns status.
  * @return {Object} status
  */
  getConfig() {
    return this.http.get(`${ this.nodeUrl }/get-config`);
  }

  /*
  * Posts new user registration to API
  * @return {Object} user
  */
  loginUser(user) {
    return this.http.post(`${ this.nodeUrl }/users/login`, { user });
  }

  /*
  * Posts new user registration to API
  * @return {Object} user
  */
  registerUser(user) {
    return this.http.post(`${ this.nodeUrl }/users/register`, { user });
  }
}
