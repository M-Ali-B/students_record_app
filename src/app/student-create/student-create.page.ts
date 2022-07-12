import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss'],
})
export class StudentCreatePage implements OnInit {

  studName: string = "";
  fName: string = "";
  classNumber: string = "";
  phone: string = "";
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

  remove(id) {
    this.db.deleteUser(id);
  }

}
