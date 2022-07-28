import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallStudentsPageRoutingModule } from './call-students-routing.module';

import { CallStudentsPage } from './call-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallStudentsPageRoutingModule
  ],
  declarations: [CallStudentsPage]
})
export class CallStudentsPageModule {}
