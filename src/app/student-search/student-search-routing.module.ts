import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentSearchPage } from './student-search.page';

const routes: Routes = [
  {
    path: '',
    component: StudentSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSearchPageRoutingModule {}
