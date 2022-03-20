import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { NotifyService } from '../notifyService/notify.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  myForm: FormGroup;
  categories: Category[] = [];
  currentNote: Note = null;
  titlu: string = 'Add a note';

  constructor(
    private formBuilder: FormBuilder,
    private _noteService: NoteService,
    private _router: Router,
    private _categoryService: CategoryService,
    private _activeRoute: ActivatedRoute,
    private _notify: NotifyService
  ) {}

  ngOnInit(): void {
    if (this._activeRoute.firstChild !== null) {
      const noteId = this._activeRoute.firstChild.snapshot.params['noteId'];
      this._noteService
        .getNoteById(noteId)
        .subscribe((note) => (this.currentNote = note));
      this.titlu = `Edit ${this.currentNote.title}`;
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
        this.currentNote === null ? '' : this.currentNote.categoryId,
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
      new Promise((resolve) => {
        this._noteService.addNote(note);
        resolve(null);
      }).then(() => {
        this._notify.showNotification('Note added.');
      });
    } else {
      const note: Note = {
        id: this.currentNote.id,
        title: this.myForm.value.title,
        description: this.myForm.value.description,
        categoryId: this.myForm.value.categoryId,
      };
      new Promise((resolve) => {
        this._noteService.updateNote(this.currentNote.id, note);
        resolve(null);
      }).then(() => {
        this._notify.showNotification('Note edited.');
      });
    }
    this._router.navigateByUrl('');
  }
}
