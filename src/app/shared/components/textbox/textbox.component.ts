import { Component, OnInit, Input } from '@angular/core';

import { Textbox } from '../../custom-types/form-fields/textbox';

@Component({
  moduleId: module.id,
  selector: 'app-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  public fieldProperties: Textbox;

  @Input() public fieldSpecs: Textbox = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
