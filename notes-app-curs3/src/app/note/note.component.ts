import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { catchError } from 'rxjs';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { NotifyService } from '../notifyService/notify.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[] = [];
  categories: Category[] = [];
  @Output() emitNoNotes = new EventEmitter();
  @Input() selectedCategotyId: string = '';
  @Input() searchedValue: string = '';

  constructor(
    private _noteService: NoteService,
    private _categoryService: CategoryService,
    private _notify: NotifyService
  ) {}

  ngOnInit(): void {
    this.updateNotes();
    this.categories = this._categoryService.getCategories();
  }

  ngOnChanges(): void {
    this._noteService
      .getDoubleFilteredNotes(this.selectedCategotyId, this.searchedValue)
      .subscribe((notes) => {
        this.notes = notes;
        let emitTimeout = setTimeout(() => {
          this.emitNoNotes.emit(notes.length === 0);
          clearTimeout(emitTimeout);
        }, 100);
      });
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
      this._noteService.getNotes().subscribe((notes) => {
        this.notes = notes;
        this._notify.showNotification('Note deleted.');
      });
    });

    // new Promise((resolve) => {
    //   this._noteService.deleteNote(noteId).subscribe(() => {
    //     this._noteService.getNotes().subscribe((notes) => (this.notes = notes));
    //   });
    //   resolve(null);
    // }).then(() => {
    //   this._notify.showNotification('Note deleted.');
    // });
  }
}
