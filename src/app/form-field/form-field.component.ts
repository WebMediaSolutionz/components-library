import { Component, OnInit, Input } from '@angular/core';

import { Field } from '../shared/model/field';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  protected fieldProperties: Field;

  @Input() private fieldSpecs: any = null;

  constructor() { }

  ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
