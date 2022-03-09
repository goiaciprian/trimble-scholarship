import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  noteTitle: string = '';
  noteDescription: string = '';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parameter) => {
      console.log(parameter['id']);
    });
    this._activatedRoute.queryParams.subscribe((parameter) => {
      console.log(parameter['title'], parameter['description']);
    });
  }
}
