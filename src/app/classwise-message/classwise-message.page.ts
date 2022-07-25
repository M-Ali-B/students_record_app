import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { DbService } from '../db.service';

@Component({
  selector: 'app-classwise-message',
  templateUrl: './classwise-message.page.html',
  styleUrls: ['./classwise-message.page.scss'],
})
export class ClasswiseMessagePage implements OnInit {

  data = [5, 6, 7, 8, 9, 10];
  message = '';
  today = new Date().toString();
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
    let successCount = 0;
    let failureCount = 0;
    this.db.USERS.forEach(
      (user) => {
        this.sms.send(user.phone, this.message)
          .then((info) => {
            successCount++;
            this.addLogs(this.message, user);
            //alert('message sent' + '=> ' + info)
          }, (e) => {
            failureCount++;
            //  alert(JSON.stringify(e))
          });
      }
    );
    if (successCount > 0) {
      alert('message send ' + ' ' + successCount + ' users')
    }
    if (failureCount > 0) {
      alert('sending failed to ' + ' ' + successCount + ' users')
    }
  }

  addLogs(message, user) {
    this.db.logAddItem(this.today, message, user.name, user.fname, user.class);
  }
}
