import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { DbService } from '../db.service';

@Component({
  selector: 'app-send-selective-message-students',
  templateUrl: './send-selective-message-students.page.html',
  styleUrls: ['./send-selective-message-students.page.scss'],
})
export class SendSelectiveMessageStudentsPage implements OnInit {
  selectedUsers: Array<any>;
  message: string = "";
  today = new Date().toString();
  constructor(
    private sms: SMS,
    private db: DbService,
    private router: Router
  ) {
    this.selectedUsers = this.db.selectedUsers;
  }

  ngOnInit() {
  }

  sendSMS() {
    console.log(this.selectedUsers);
    this.selectedUsers.forEach(
      (user) => {
        this.db.logAddItem(this.today, this.message, user.name, user.fname, user.class)
        this.sms.send(user.phone, this.message)
          .then(() => {
            // alert('message sent')
          }, (e) => alert(JSON.stringify(e)));
      }
    );
  }
}
