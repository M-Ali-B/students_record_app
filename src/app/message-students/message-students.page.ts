import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
@Component({
  selector: 'app-message-students',
  templateUrl: './message-students.page.html',
  styleUrls: ['./message-students.page.scss'],
})
export class MessageStudentsPage implements OnInit {
  reciever: string = "";
  message: string = "";
  constructor(private sms: SMS) { }

  ngOnInit() {
  }

  sendSMS() {
    this.sms.send(this.reciever, this.message);
  }

}
