import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryId: string = '';

  searchedValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  receiveCategoryId(id: string) {
    this.categoryId = id;
  }

  receiveSearchedValue(value: string) {
    this.searchedValue = value;
  }
}
