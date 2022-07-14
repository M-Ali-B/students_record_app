import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-import-export-data',
  templateUrl: './import-export-data.page.html',
  styleUrls: ['./import-export-data.page.scss'],
})
export class ImportExportDataPage implements OnInit {

  constructor(
    private db: DbService
  ) { }

  ngOnInit() {
  }

  exportData() {
    this.db.exportData();
  }
}
