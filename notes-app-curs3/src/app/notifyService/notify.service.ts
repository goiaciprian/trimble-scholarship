import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private _snackbarService: MatSnackBar) {}

  showNotification(
    message: string,
    buttonText?: string,
    type?: 'error' | 'success'
  ) {
    this._snackbarService.open(message, buttonText, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type || 'success',
    });
  }
}
