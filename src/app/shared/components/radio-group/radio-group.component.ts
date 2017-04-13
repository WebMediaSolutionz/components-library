import { Component, OnInit, Input } from '@angular/core';

import { FieldGroup } from '../../custom-types/form-fields/field-group';

@Component({
  moduleId: module.id,
  selector: 'app-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  public fieldProperties: FieldGroup;

  @Input() public fieldSpecs: FieldGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
