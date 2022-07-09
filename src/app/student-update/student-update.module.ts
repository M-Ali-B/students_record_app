import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentUpdatePageRoutingModule } from './student-update-routing.module';

import { StudentUpdatePage } from './student-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentUpdatePageRoutingModule
  ],
  declarations: [StudentUpdatePage]
})
export class StudentUpdatePageModule {}
