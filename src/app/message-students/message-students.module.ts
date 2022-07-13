import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageStudentsPageRoutingModule } from './message-students-routing.module';

import { MessageStudentsPage } from './message-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageStudentsPageRoutingModule
  ],
  declarations: [MessageStudentsPage]
})
export class MessageStudentsPageModule {}
