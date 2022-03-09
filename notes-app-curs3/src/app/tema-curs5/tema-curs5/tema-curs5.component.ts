import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-curs5',
  templateUrl: './tema-curs5.component.html',
  styleUrls: ['./tema-curs5.component.scss'],
})
export class TemaCurs5Component implements OnInit {
  dates: Date[] = [
    new Date(2022, 2, 3),
    new Date(2022, 2, 5),
    new Date(2022, 2, 7),
    new Date(2022, 2, 9),
    new Date(2022, 2, 12),
  ];

  constructor() {}

  ngOnInit(): void {}
}
