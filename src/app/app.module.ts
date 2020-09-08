import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { L1Component } from './l1/l1.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';
import { L5Component } from './l5/l5.component';
import { L6Component } from './l6/l6.component';
import { L7Component } from './l7/l7.component';
import { L8Component } from './l8/l8.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    L1Component,
    L3Component,
    L4Component,
    L5Component,
    L6Component,
    L7Component,
    L8Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
