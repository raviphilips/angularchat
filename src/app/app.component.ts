import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  name: any;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
  	this.items = af.list('/messages' , {
  		query: {
  			limitToLast: 50
  		}
  	});
		this.user = this.afAuth.authState;
		//this.name = this.afAuth.authState;
  }

 
 loginWithFacebook(){
 	this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
 }

 loginWithGoogle(){
 	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }

/*chatSend(theirMessage: string){
	this.items.push({message: theirMessage, name: this.name.facebook.displayname});
	this.msgVal ='';
}*/




login() {
    this.afAuth.auth.signInAnonymously();
}

logout() {
    this.afAuth.auth.signOut();
}

Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
}

}
