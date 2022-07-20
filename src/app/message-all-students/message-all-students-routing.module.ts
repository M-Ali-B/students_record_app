import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageAllStudentsPage } from './message-all-students.page';

const routes: Routes = [
  {
    path: '',
    component: MessageAllStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageAllStudentsPageRoutingModule {}
