import { Component } from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatRadioChange} from "@angular/material/radio";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-first-project';
  isChecked=false;
  isContentShown=false;
  // selectorValue=['1'];
  selectorValue='1';
  inputValue!: string;
  address!: any;

  onCheckBoxChange(event: MatCheckboxChange) {
    this.isContentShown=event.checked;
    console.log(event.source)
  }

  onRadioChange($event: MatRadioChange) {
    console.log($event.value);
    console.log($event.source)

  }

//   selectChange() {
// console.log(this.selectorValue)
//   }



  selectChange($event:MatSelectChange) {
    console.log($event.value)
    console.log($event.source)
  }
}
