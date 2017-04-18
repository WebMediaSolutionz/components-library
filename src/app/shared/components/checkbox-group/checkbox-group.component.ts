import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { fieldGroup } from '../../custom-types/form-fields/interfaces/field-group';

@Component({
  moduleId: module.id,
  selector: 'app-checkbox-group',
  templateUrl: 'checkbox-group.component.html',
  styleUrls: ['checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {

  public fieldProperties: fieldGroup;

  @Input() public fieldSpecs: fieldGroup = null;

  @Input() public group: FormGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
