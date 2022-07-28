import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallStudentsPage } from './call-students.page';

const routes: Routes = [
  {
    path: '',
    component: CallStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallStudentsPageRoutingModule {}
