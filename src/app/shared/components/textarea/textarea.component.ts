import { Component, OnInit, Input } from '@angular/core';

import { Field } from '../../custom-types/form-fields/field';
import { Textarea } from '../../custom-types/form-fields/textarea';

@Component({
  moduleId: module.id,
  selector: 'app-textarea',
  templateUrl: 'textarea.component.html',
  styleUrls: ['textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  public fieldProperties: Textarea;

  @Input() public fieldSpecs: Textarea = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
