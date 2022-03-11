import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  searchTimeout;

  @Output() emitSearchValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setSearchValue(event: any) {
    const value = event.target.value;
    this.searchValue = value;

    this.searchTimeout = setTimeout(() => {
      this.emitSearchValue.emit(this.searchValue);
      clearTimeout(this.searchTimeout);
    }, 800);
  }
}
