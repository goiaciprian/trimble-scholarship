import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private _noteService: NoteService,
    private _router: Router,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      categoryId: ['-1', [Validators.required]],
    });
    this.categories = this._categoryService.getCategories();
  }

  onSubmit(): void {
    const note: Note = {
      id: this.myForm.value.title + 'z',
      title: this.myForm.value.title,
      description: this.myForm.value.description,
      categoryId: this.myForm.value.categoryId,
    };
    this._noteService.addNote(note);
    this._router.navigateByUrl('');
  }
}
