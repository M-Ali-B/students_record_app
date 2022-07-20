import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-message-all-students',
  templateUrl: './message-all-students.page.html',
  styleUrls: ['./message-all-students.page.scss'],
})
export class MessageAllStudentsPage implements OnInit {

  constructor(private db: DbService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.db.getAllUsers();
  }

  ionChange(event) {
    console.log(event.detail.value)
    if (event.detail.value != '') {
      this.db.getUserByName(event.detail.value);
    }
    else {
      this.db.getAllUsers();
    }
  }
}
