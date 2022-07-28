import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
// import { FileTransfer, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Utility } from './Utility';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    SQLite,
    SMS,
    SQLitePorter,
    File,
    FileOpener,
    Utility,
    Chooser,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
