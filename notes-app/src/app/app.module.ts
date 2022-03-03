import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { App2Component } from './app2/app2.component';
import { TemaCurs2Module } from './tema-curs2/tema-curs2.module';
import { NestedModule1Module } from './nested-module1/nested-module1.module';

@NgModule({
  declarations: [AppComponent, App2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemaCurs2Module,
    NestedModule1Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
