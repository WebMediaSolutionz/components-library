import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { radio } from '../../custom-types/form-fields/interfaces/radio';

@Component({
  moduleId: module.id,
  selector: 'app-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.scss']
})
export class RadioComponent implements OnInit {

  public fieldProperties: radio;

  @Output() public radioSelected = new EventEmitter();

  @Input() public fieldSpecs: radio = null;

  @Input() public group: FormGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

  public select(value: string): void {
    this.fieldProperties.checked = true;
    this.radioSelected.emit(value);
  }

}
