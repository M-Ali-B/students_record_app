import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendSelectiveMessageStudentsPage } from './send-selective-message-students.page';

const routes: Routes = [
  {
    path: '',
    component: SendSelectiveMessageStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendSelectiveMessageStudentsPageRoutingModule {}
