import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categories: Category[] = [];

  @Output() emitSelectedFilter = new EventEmitter<string>();

  constructor(private _categoriService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this._categoriService.getCategories();
  }

  setCategory(id: string) {
    this.emitSelectedFilter.emit(id);
  }
}
