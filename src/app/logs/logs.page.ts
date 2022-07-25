import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  constructor(
    private db: DbService
  ) {
    //this.db.databaseConn();
    this.db.logDatabaseConn();
  }

  ngOnInit() {
  }

  remove(log_id) {
    this.db.deleteLog(log_id);
  }
}
