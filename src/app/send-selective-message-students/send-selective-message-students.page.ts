import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { DbService } from '../db.service';

@Component({
  selector: 'app-send-selective-message-students',
  templateUrl: './send-selective-message-students.page.html',
  styleUrls: ['./send-selective-message-students.page.scss'],
})
export class SendSelectiveMessageStudentsPage implements OnInit {
  studentsNumbers: Array<any>;
  message: string = "";
  constructor(
    private sms: SMS,
    private db: DbService
  ) {
    this.studentsNumbers = this.db.cellNumbers;
  }

  ngOnInit() {
  }

  sendSMS() {
    console.log(this.studentsNumbers);
    this.sms.send(this.studentsNumbers, this.message);
  }
}
