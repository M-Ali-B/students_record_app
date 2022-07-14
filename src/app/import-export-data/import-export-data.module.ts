import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportExportDataPageRoutingModule } from './import-export-data-routing.module';

import { ImportExportDataPage } from './import-export-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportExportDataPageRoutingModule
  ],
  declarations: [ImportExportDataPage]
})
export class ImportExportDataPageModule {}
