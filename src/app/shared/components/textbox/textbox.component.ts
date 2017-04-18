import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { textbox } from '../../custom-types/form-fields/interfaces/textbox';

@Component({
  moduleId: module.id,
  selector: 'app-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  public fieldProperties: textbox;

  @Input() public fieldSpecs: textbox = null;

  @Input() public group: FormGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
