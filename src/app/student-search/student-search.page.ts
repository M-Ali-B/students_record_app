import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import * as myGlobal from '../global';
@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.page.html',
  styleUrls: ['./student-search.page.scss'],
})
export class StudentSearchPage implements OnInit {
  data = myGlobal.classData;
  constructor(
    private db: DbService
  ) {
    this.db.reset();
  }

  ngOnInit() {
  }

  handleChange($event) {
    console.log($event.detail.value);
    this.db.getAllUsersByClass($event.detail.value);

  }

  remove(id) {
    this.db.deleteUser(id);
  }
}
