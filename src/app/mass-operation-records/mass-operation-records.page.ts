import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import * as myGlobal from '../global';
@Component({
  selector: 'app-mass-operation-records',
  templateUrl: './mass-operation-records.page.html',
  styleUrls: ['./mass-operation-records.page.scss'],
})
export class MassOperationRecordsPage implements OnInit {
  data = myGlobal.classData;
  fromClassNumber: string = "";
  toClassNumber: string = "";
  constructor(private db: DbService) { }

  ngOnInit() {
  }

  handleChangefromClass($event) {
    this.fromClassNumber = $event.detail.value;
  }

  handleChangetoClass($event) {
    this.toClassNumber = $event.detail.value;
  }

  changeClass() {
    this.db.massUpdateUsers(this.fromClassNumber, this.toClassNumber)
      .then(() => alert('Success'))
      .catch((err) => alert('Failed' + err))
  }
}
