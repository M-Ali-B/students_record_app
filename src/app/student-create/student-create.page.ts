import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss'],
})
export class StudentCreatePage implements OnInit {
  data = [5, 6, 7, 8, 9, 10];
  studName: string = "";
  fName: string = "";
  classNumber: string = "";
  phone: string = "";
  constructor(
    private db: DbService
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.db.getAllUsers();
  }

  handleChange($event) {
    this.classNumber = $event.detail.value;
  }

  createUser() {
    this.db.addItem(this.studName, this.fName, this.classNumber, this.phone)
  }

  remove(id) {
    this.db.deleteUser(id);
  }

}
