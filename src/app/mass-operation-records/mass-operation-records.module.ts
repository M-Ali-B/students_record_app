import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassOperationRecordsPageRoutingModule } from './mass-operation-records-routing.module';

import { MassOperationRecordsPage } from './mass-operation-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassOperationRecordsPageRoutingModule
  ],
  declarations: [MassOperationRecordsPage]
})
export class MassOperationRecordsPageModule {}
