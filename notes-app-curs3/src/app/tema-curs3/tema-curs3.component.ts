import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-curs3',
  templateUrl: './tema-curs3.component.html',
  styleUrls: ['./tema-curs3.component.scss'],
})
export class TemaCurs3Component implements OnInit {
  culoareInput: string = '';
  culoareInputButon: string = '';

  constructor() {}

  ngOnInit(): void {}

  setCuloare(culoare: string): void {
    this.culoareInput = culoare;
  }
}
