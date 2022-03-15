import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detalles/hero-detalles.component';
import { MessagesComponent } from './messages/messages.component'; 
import { MessageService } from './message.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
    
    
    
  ],
  exports: [
    HeroDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
    
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
