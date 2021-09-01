// Inicializa angular

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWord } from './components/component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWord
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HelloWord, AppComponent]
})
export class AppModule { }
