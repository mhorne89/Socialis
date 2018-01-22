// Import Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../routers/routing.module';
import { MaterialModule } from '@angular/material';

// Import custom components
import { ConfigComponent } from '../components/config.component';


/*
* @NgModule: ConfigModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own 
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
* 
* This module is the root/parent module for all other modules.
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [ ConfigComponent ],
  bootstrap: [ ConfigComponent ]
})
export class ConfigModule { }
