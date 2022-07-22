import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasswiseMessagePageRoutingModule } from './classwise-message-routing.module';

import { ClasswiseMessagePage } from './classwise-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasswiseMessagePageRoutingModule
  ],
  declarations: [ClasswiseMessagePage]
})
export class ClasswiseMessagePageModule {}
