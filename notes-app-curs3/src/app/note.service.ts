import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [
    { id: '1', title: 'Note1', description: 'Description1', categoryId: '1' },
    { id: '2', title: 'Note2', description: 'Description2', categoryId: '2' },
    { id: '3', title: 'Note3', description: 'Description3', categoryId: '1' },
    { id: '4', title: 'Note4', description: 'Description4', categoryId: '3' },
    { id: '5', title: 'Note5', description: 'Description5', categoryId: '1' },
  ];

  constructor() {}

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  getFilteredNotes(categoryId: string) {
    if (categoryId === '') return this.notes;
    return this.notes.filter((note) => note.categoryId === categoryId);
  }

  getFilteredNotesBySubstring(value: string) {
    if (value === '') return this.notes;
    return this.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(value.toLowerCase()) ||
        note.description.toLowerCase().includes(value.toLowerCase())
    );
  }
}
