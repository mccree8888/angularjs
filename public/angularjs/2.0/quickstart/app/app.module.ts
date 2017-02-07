import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { AppMy }  from './app.my';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AppMy ],
  bootstrap:    [ AppComponent,AppMy ]
})

export class AppModule { }
