import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _category: Category[] = [
    { name: 'To do', id: '1', color: '#f0f0f0' },
    { name: 'Done', id: '2', color: '#A0D582' },
    { name: 'Doing', id: '3', color: '#F1ED95' },
  ];
  constructor(private _client: HttpClient) {}

  getCategories(): Category[] {
    return this._category;
  }
}
