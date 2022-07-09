import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentUpdatePage } from './student-update.page';

const routes: Routes = [
  {
    path: '',
    component: StudentUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentUpdatePageRoutingModule {}
