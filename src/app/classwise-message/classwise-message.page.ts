import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { DbService } from '../db.service';
import * as myGlobal from '../global';
@Component({
  selector: 'app-classwise-message',
  templateUrl: './classwise-message.page.html',
  styleUrls: ['./classwise-message.page.scss'],
})
export class ClasswiseMessagePage implements OnInit {

  data = myGlobal.classData;
  message = '';
  today = new Date().toString();
  successCount: Array<any> = [];
  failureCount: Array<any> = [];
  constructor(
    private db: DbService,
    private sms: SMS
  ) {
    this.db.reset();
  }

  ngOnInit() {
  }

  handleChange($event) {
    console.log($event.detail.value);
    this.db.getAllUsersByMultipleClasses($event.detail.value);

  }

  sendSMS() {
    console.log(this.db.USERS);
    var counter = 0;
    this.db.USERS.forEach(
      (user) => {
        this.sms.send(user.phone, this.message)
          .then((info) => {
            counter++;
            this.successCount.push(user);
            if (counter == this.db.USERS.length) {
              this.checkSuccessMessages();
            }
            this.addLogs(this.message, user);
            //alert('message sent' + '=> ' + info)
          }, (e) => {
            counter++;
            this.failureCount.push(user);
            if (counter == this.db.USERS.length) {
              this.checkFailMessages();
            }
            //  alert(JSON.stringify(e))
          });
      }
    );
  }

  addLogs(message, user) {
    this.db.logAddItem(this.today, message, user.name, user.fname, user.class);
  }

  checkSuccessMessages() {
    alert('Message send to' + ' ' + this.successCount.length + ' users')
  }
  checkFailMessages() {
    alert('sending failed to ' + ' ' + this.failureCount.length + ' users')
  }
}
