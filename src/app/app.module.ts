import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthService } from './services/auth.service';
import { DbService } from './services/db.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


var config = {
    apiKey: "AIzaSyABSfsISu85eJ2qbfZ0sTNezAZG4NCmb70",
    authDomain: "chatapp-6bcb1.firebaseapp.com",
    databaseURL: "https://chatapp-6bcb1.firebaseio.com",
    projectId: "chatapp-6bcb1",
    storageBucket: "chatapp-6bcb1.appspot.com",
    messagingSenderId: "63490617919"
  };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
