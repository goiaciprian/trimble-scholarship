import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [
    { id: '1', title: 'Note1', description: 'Description1', categoryId: '1' },
    { id: '2', title: 'Note2', description: 'Description2', categoryId: '1' },
    { id: '3', title: 'Note3', description: 'Description3', categoryId: '1' },
    { id: '4', title: 'Note4', description: 'Description4', categoryId: '1' },
    { id: '5', title: 'Note5', description: 'Description5', categoryId: '1' },
  ];

  constructor(private _categoryService: CategoryService) {}

  getNotes(): Note[] {
    return this.notes.filter((note: Note) => {
      return note.categoryId === this._categoryService.getSelectedCategory();
    });
  }

  addNote(note: Note): void {
    alert(note.title);
    this.notes.push(note);
  }
}
