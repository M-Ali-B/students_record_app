import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentSearchPageRoutingModule } from './student-search-routing.module';

import { StudentSearchPage } from './student-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentSearchPageRoutingModule
  ],
  declarations: [StudentSearchPage]
})
export class StudentSearchPageModule {}
