import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[] = [];
  @Input() selectedCategotyId: string = '';
  @Input() searchedValue: string = '';

  constructor(private _noteService: NoteService) {}

  ngOnInit(): void {
    this.updateNotes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('selectedCategotyId')) {
      this.notes = this._noteService.getFilteredNotes(this.selectedCategotyId);
    }

    if (changes.hasOwnProperty('searchedValue')) {
      this.notes = this._noteService.getFilteredNotesBySubstring(
        this.searchedValue
      );
    }
  }

  updateNotes() {
    this.notes = [...this._noteService.getNotes()];
  }
}
