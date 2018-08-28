import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlaygroundComponent } from './playground/playground.component';
import {MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
