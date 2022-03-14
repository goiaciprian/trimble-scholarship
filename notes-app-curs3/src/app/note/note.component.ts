import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[] = [];
  categories: Category[] = [];
  @Input() selectedCategotyId: string = '';
  @Input() searchedValue: string = '';

  constructor(
    private _noteService: NoteService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.updateNotes();
    this.categories = this._categoryService.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('selectedCategotyId')) {
      // this.notes = this._noteService.getFilteredNotes(this.selectedCategotyId);
      this._noteService
        .getFilteredNotes(this.selectedCategotyId)
        .subscribe((notes) => (this.notes = notes));
    }

    if (changes.hasOwnProperty('searchedValue')) {
      this._noteService
        .getFilteredNotesBySubstring(this.searchedValue)
        .subscribe((notes: Note[]) => (this.notes = notes));
    }
  }

  updateNotes() {
    // this.notes = [...this._noteService.getNotes()];
    this._noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  setNoteColor(id: string): string {
    return this.categories.filter((category) => category.id === id)[0].color;
  }

  deleteNote(noteId: string) {
    this._noteService.deleteNote(noteId).subscribe(() => {
      this._noteService.getNotes().subscribe((notes) => (this.notes = notes));
    });
  }
}
