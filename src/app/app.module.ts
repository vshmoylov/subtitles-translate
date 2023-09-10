import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from "ng-zorro-antd/list";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { NzIconModule } from "ng-zorro-antd/icon";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzGridModule,
    NzAlertModule,
    NzPaginationModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
