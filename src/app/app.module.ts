import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routing';
import { PagesModule } from './pages/pages.module';
 



//material
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    MatButtonModule,
    BrowserModule, 
    BrowserAnimationsModule,
    PagesModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
