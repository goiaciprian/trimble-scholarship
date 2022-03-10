import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { TemaCurs6Component } from './tema-curs6/tema-curs6/tema-curs6.component';

const routes: Routes = [
  { path: 'curs6/:variable', component: TemaCurs6Component },
  { path: 'add-note', component: AddNoteComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
