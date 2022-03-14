import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  myForm: FormGroup;
  categories: Category[] = [];
  currentNote: Note = null;

  constructor(
    private formBuilder: FormBuilder,
    private _noteService: NoteService,
    private _router: Router,
    private _categoryService: CategoryService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this._activeRoute.firstChild !== null) {
      const noteId = this._activeRoute.firstChild.snapshot.params['noteId'];
      this._noteService
        .getNoteById(noteId)
        .subscribe((note) => (this.currentNote = note));
    }
    this.myForm = this.formBuilder.group({
      title: [
        this.currentNote === null ? '' : this.currentNote.title,
        [Validators.required],
      ],
      description: [
        this.currentNote === null ? '' : this.currentNote.description,
        [Validators.required, Validators.minLength(10)],
      ],
      categoryId: [
        this.currentNote === null ? '-1' : this.currentNote.categoryId,
        [Validators.required],
      ],
    });

    this.categories = this._categoryService.getCategories();
  }

  onSubmit(): void {
    if (this.currentNote === null) {
      const note: Note = {
        id: this.myForm.value.title + 'z',
        title: this.myForm.value.title,
        description: this.myForm.value.description,
        categoryId: this.myForm.value.categoryId,
      };
      this._noteService.addNote(note);
    } else {
      const note: Note = {
        id: this.currentNote.id,
        title: this.myForm.value.title,
        description: this.myForm.value.description,
        categoryId: this.myForm.value.categoryId,
      };
      this._noteService.updateNote(this.currentNote.id, note);
    }
    this._router.navigateByUrl('');
  }
}
