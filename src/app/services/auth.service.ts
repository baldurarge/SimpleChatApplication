import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user:any;
  user2:any;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(name){
    this.afAuth.auth.signInAnonymously().then(()=>{
      this.afAuth.auth.currentUser.updateProfile({
        displayName:name,
        photoURL:"sd"
      })
    })
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
