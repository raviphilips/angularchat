import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Must export the config
export const firebaseConfig ={ 
  apiKey: "AIzaSyAuCLG6JaStDmjpIZLdHOBCxxYJbbyRu7k",
  authDomain: "ngchatapp-a76f1.firebaseapp.com",
  databaseURL: "https://ngchatapp-a76f1.firebaseio.com",
  storageBucket: "ngchatapp-a76f1.appspot.com",
  messagingSenderId: "780302674324"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
