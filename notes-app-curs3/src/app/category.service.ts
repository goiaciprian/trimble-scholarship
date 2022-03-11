import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _category: Category[] = [
    { name: 'To do', id: '1' },
    { name: 'Done', id: '2' },
    { name: 'Doing', id: '3' },
  ];
  constructor() {}

  getCategories(): Category[] {
    return this._category;
  }
}
