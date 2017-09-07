import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DbService {
  user:any;
  messages: FirebaseListObservable<any[]>;
  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    auth.user.subscribe((s)=>{
      this.user = s;
    });
    this.messages = db.list('messages');
  }

  public pushData(uid,name,message){
    this.messages.push({"uid":uid,"name":name,"message":message});
  }

}
