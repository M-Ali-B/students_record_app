import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendSelectiveMessageStudentsPageRoutingModule } from './send-selective-message-students-routing.module';

import { SendSelectiveMessageStudentsPage } from './send-selective-message-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendSelectiveMessageStudentsPageRoutingModule
  ],
  declarations: [SendSelectiveMessageStudentsPage]
})
export class SendSelectiveMessageStudentsPageModule {}
