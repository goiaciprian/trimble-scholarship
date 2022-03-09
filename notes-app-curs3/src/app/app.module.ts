import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TemaCurs3Component } from './tema-curs3/tema-curs3.component';
import { AddValuePipe } from './add-value.pipe';
import { MatCardModule } from '@angular/material/card';
import { FilterComponent } from './filter/filter.component';
import { TemaCurs5Module } from './tema-curs5/tema-curs5.module';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    TemaCurs3Component,
    AddValuePipe,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    TemaCurs5Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
