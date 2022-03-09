import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  notes: Note[] = [
    { id: '1', title: 'Note1', description: 'Description1' },
    { id: '2', title: 'Note2', description: 'Description2' },
    { id: '3', title: 'Note3', description: 'Description3' },
    { id: '4', title: 'Note4', description: 'Description4' },
    { id: '5', title: 'Note5', description: 'Description5' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
