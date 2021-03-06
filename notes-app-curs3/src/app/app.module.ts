import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TemaCurs3Component } from './tema-curs3/tema-curs3.component';
import { AddValuePipe } from './add-value.pipe';
import { MatCardModule } from '@angular/material/card';
import { FilterComponent } from './filter/filter.component';
import { TemaCurs5Module } from './tema-curs5/tema-curs5.module';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { TemaCurs6Module } from './tema-curs6/tema-curs6.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteService } from './note.service';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockApiInterceptor } from './services/http-mock-api.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    TemaCurs3Component,
    AddValuePipe,
    FilterComponent,
    HomeComponent,
    AddNoteComponent,
    SearchComponent,
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
    TemaCurs6Module,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [
    NoteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
