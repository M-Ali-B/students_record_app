import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageStudentsPage } from './message-students.page';

const routes: Routes = [
  {
    path: '',
    component: MessageStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageStudentsPageRoutingModule {}
