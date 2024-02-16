import { Component } from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatRadioChange} from "@angular/material/radio";
import {MatSelectChange} from "@angular/material/select";
import {MatChipEditedEvent, MatChipEvent, MatChipInputEvent, MatChipListboxChange} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

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
  chipRemovable=true;
  chipList=['chip1','chip2','chip3'];
  separateKey=[ENTER,COMMA];
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

  chipRemove($event:MatChipEvent){
    console.log($event)
  }

  selectChip($event: MatChipListboxChange) {
    console.log($event);
  }

  add($event: MatChipInputEvent) {
     if($event.value){
       this.chipList.push($event.value)
     }
  }

  editChip($event: MatChipEditedEvent) {
    console.log($event)
  }
}
