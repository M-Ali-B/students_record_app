import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageAllStudentsPageRoutingModule } from './message-all-students-routing.module';

import { MessageAllStudentsPage } from './message-all-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageAllStudentsPageRoutingModule
  ],
  declarations: [MessageAllStudentsPage]
})
export class MessageAllStudentsPageModule {}
