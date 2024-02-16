import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-angular-material-dialog',
  templateUrl: './angular-material-dialog.component.html',
  styleUrls: ['./angular-material-dialog.component.scss']
})
export class AngularMaterialDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA)public data:string,private _dialogRef:MatDialogRef<AngularMaterialDialogComponent>) {
  }

  onCloseDialog() {
    const nameArray=['ali','sajjad'];
    this._dialogRef.close(nameArray);
  }
}
