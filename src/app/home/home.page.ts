import { Component } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private db: DbService
  ) {
    this.db.databaseConn();
  }

  loadData() {
    this.db.loadPreData();
  }
}
