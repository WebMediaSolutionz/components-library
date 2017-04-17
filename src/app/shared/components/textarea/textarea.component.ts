import { Component, OnInit, Input } from '@angular/core';

import { textarea } from '../../custom-types/form-fields/interfaces/textarea';

@Component({
  moduleId: module.id,
  selector: 'app-textarea',
  templateUrl: 'textarea.component.html',
  styleUrls: ['textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  public fieldProperties: textarea;

  @Input() public fieldSpecs: textarea = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
