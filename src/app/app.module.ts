import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveOffcanvas, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SetsComponent } from './sets/sets.component';
import { OptionsComponent } from './options/options.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SetsComponent,
    OptionsComponent,
    ResultComponent,
    NavbarComponent,
    FootbarComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    NgbActiveOffcanvas,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
