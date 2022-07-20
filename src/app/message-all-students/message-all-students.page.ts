import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-message-all-students',
  templateUrl: './message-all-students.page.html',
  styleUrls: ['./message-all-students.page.scss'],
})
export class MessageAllStudentsPage implements OnInit {

  constructor(private db: DbService,
    private router: Router
  ) { }

  ngOnInit() {
    this.db.databaseConn();
  }

  ionViewDidEnter() {
    this.db.getAllUsers();
  }

  ionViewDidLeave() {
    // this.db.resetUserNumbers();
  }

  ionChange(event) {
    if (event.detail.value != '') {
      this.db.getUserByName(event.detail.value);
    }
    else {
      this.db.getAllUsers();
    }
  }

  onSendContacts() {
    this.db.getUserNumbersWithIsChecked();
    console.log(this.db.cellNumbers);
    // this.router.navigate(['/send-message-all-students']);
  }
}
