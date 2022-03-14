import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  // private notes: Note[] = [
  //   { id: '1', title: 'Note1', description: 'Description1', categoryId: '1' },
  //   { id: '2', title: 'Note2', description: 'Description2', categoryId: '2' },
  //   { id: '3', title: 'Note3', description: 'Description3', categoryId: '1' },
  //   { id: '4', title: 'Note4', description: 'Description4', categoryId: '3' },
  //   { id: '5', title: 'Note5', description: 'Description5', categoryId: '1' },
  // ];

  private readonly baseUrl = 'https://localhost:4200';
  private readonly options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _client: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this._client.get<Note[]>(this.baseUrl + `/notes`, this.options);
  }

  getNoteById(noteId: string) {
    return this._client
      .get<Note[]>(this.baseUrl + `/notes`, this.options)
      .pipe(map((notes) => notes.filter((note) => note.id === noteId)[0]));
  }

  addNote(note: Note) {
    // this.notes.push(note);
    return this._client
      .post(this.baseUrl + `/notes`, note, this.options)
      .subscribe();
  }

  updateNote(id: string, note: Note) {
    return this._client
      .put(this.baseUrl + `/notes/${id}`, note, this.options)
      .subscribe();
  }

  getFilteredNotes(categoryId: string) {
    // if (categoryId === '') return this.notes;
    // return this.notes.filter((note) => note.categoryId === categoryId);
    return this.getNotes().pipe(
      map((notes: Note[]) =>
        notes.filter((note) => note.categoryId === categoryId)
      )
    );
  }

  getFilteredNotesBySubstring(value: string) {
    if (value === '') return this.getNotes();
    return this.getNotes().pipe(
      map((notes: Note[]) =>
        notes.filter(
          (note: Note) =>
            note.title.toLowerCase().includes(value.toLowerCase()) ||
            note.description.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  }

  deleteNote(noteId: string) {
    return this._client.delete(this.baseUrl + `/notes/${noteId}`, this.options);
  }
}
