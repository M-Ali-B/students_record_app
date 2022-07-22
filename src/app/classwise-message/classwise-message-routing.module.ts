import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasswiseMessagePage } from './classwise-message.page';

const routes: Routes = [
  {
    path: '',
    component: ClasswiseMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasswiseMessagePageRoutingModule {}
