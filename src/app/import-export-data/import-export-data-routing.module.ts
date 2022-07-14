import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportExportDataPage } from './import-export-data.page';

const routes: Routes = [
  {
    path: '',
    component: ImportExportDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportExportDataPageRoutingModule {}
