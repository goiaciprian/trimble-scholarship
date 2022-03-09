import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes-app-curs3';
  date: Date = new Date(2022, 2, 9);
  defaultNumber: number = 12;
}
