import { Component } from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-first-project';
  isChecked=false;
  isContentShown=false;

  onCheckBoxChange(event: MatCheckboxChange) {
    this.isContentShown=event.checked;
    console.log(event.source)
  }
}
