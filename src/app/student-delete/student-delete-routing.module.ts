import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDeletePage } from './student-delete.page';

const routes: Routes = [
  {
    path: '',
    component: StudentDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDeletePageRoutingModule {}
