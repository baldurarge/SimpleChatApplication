import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DbService } from '../../services/db.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit {
  user:any;
  name:string;
  message:string;
  messages:any;
  classes:string;
  ready:boolean;
  constructor(private auth:AuthService, private db:DbService) {
    this.ready = false;
    auth.user.subscribe((s)=>{
      this.user = s;
    });

    this.messages = db.messages;

    db.messages.subscribe((s)=>{
      var div = document.getElementById('messageDiv');
      div.scrollTop = div.scrollHeight + 10000;
    });
    this.div_show();
   }


   /*@HostListener('window:unload', ['$event'])
   unloadHandler(event) {
     this.auth.logout();
   }*/

    div_show(){
      var that = this;
      setTimeout(function () {
        var div = document.getElementById('messageDiv');
        div.scrollTop = div.scrollHeight + 10000;
          that.ready = true;
      }, 2000);
    }


  change(){
    this.ready = true;
  }

  ngAfterViewInit(){
  }

  onSubmit(e){
    if(this.name != undefined){
      this.auth.login(this.name);
    }
  }

  onSubmitMessage(e){
    if(this.message != undefined){
      if(this.message.length > 0){

        this.db.pushData(this.user.uid,this.user.displayName,this.message);

        this.message = '';
      }
    }
  }
  public yourMessage(message){
    if(this.user.uid == message.uid){
      return true;
    }else{
      return false;
    }
  }

  public getName(uid){

  }

}
