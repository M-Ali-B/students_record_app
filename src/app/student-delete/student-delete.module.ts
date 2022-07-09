import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDeletePageRoutingModule } from './student-delete-routing.module';

import { StudentDeletePage } from './student-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentDeletePageRoutingModule
  ],
  declarations: [StudentDeletePage]
})
export class StudentDeletePageModule {}
