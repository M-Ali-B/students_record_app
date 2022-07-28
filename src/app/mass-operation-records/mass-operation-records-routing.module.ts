import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassOperationRecordsPage } from './mass-operation-records.page';

const routes: Routes = [
  {
    path: '',
    component: MassOperationRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassOperationRecordsPageRoutingModule {}
