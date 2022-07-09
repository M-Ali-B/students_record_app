import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss'],
})
export class StudentCreatePage implements OnInit {

  studName: String = "";
  fName: String = "";
  classNumber: Number = 0;
  phone: Number = 0;
  constructor(
    private db: DbService
  ) {
    this.db.databaseConn();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.db.getAllUsers();
  }

  createUser() {
    this.db.addItem(this.studName, this.fName, this.classNumber, this.phone)
  }

}
