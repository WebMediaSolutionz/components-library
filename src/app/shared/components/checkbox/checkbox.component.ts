import { Component, OnInit, Input } from '@angular/core';

import { Checkbox } from '../../custom-types/form-fields/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public fieldProperties: Checkbox;

  @Input() public fieldSpecs: Checkbox = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
