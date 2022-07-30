import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
@Component({
  selector: 'app-call-students',
  templateUrl: './call-students.page.html',
  styleUrls: ['./call-students.page.scss'],
})
export class CallStudentsPage implements OnInit {

  constructor(private db: DbService,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.db.databaseConn();
  }

  ionViewDidEnter() {
    this.db.getAllUsers();
  }

  ionChange(event) {
    if (event.detail.value != '') {
      this.db.getUserByName(event.detail.value);
    }
    else {
      this.db.getAllUsers();
    }
  }

  callContacts(phoneNumber) {
    this.callNumber.callNumber(phoneNumber, true)
      .then()
      .catch(err => alert('Error launching dialer' + err));


  }

}
