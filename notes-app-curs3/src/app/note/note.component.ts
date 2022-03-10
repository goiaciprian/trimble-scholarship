import { Component, OnInit, Output } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  notes: Note[] = [];

  constructor(private _noteService: NoteService) {}

  ngOnInit(): void {
    this.updateNotes();
  }

  updateNotes() {
    this.notes = [...this._noteService.getNotes()];
  }
}
