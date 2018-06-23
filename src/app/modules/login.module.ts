// Import Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../routers/routing.module';
import { ConichiTextModule, ConichiNotificationModule } from 'conichi-material';

// Import custom components
import { LoginComponent } from '../components/login.component';


/*
* @NgModule: LoginModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own 
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ConichiTextModule,
    ConichiNotificationModule
  ],
  declarations: [ LoginComponent ],
  bootstrap: [ LoginComponent ]
})
export class LoginModule { }
