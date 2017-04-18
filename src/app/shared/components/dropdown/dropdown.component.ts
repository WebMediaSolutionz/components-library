import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { dropdown } from '../../custom-types/form-fields/interfaces/dropdown';

@Component({
  moduleId: module.id,
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public fieldProperties: dropdown;

  @Input() public fieldSpecs: dropdown = null;

  @Input() public group: FormGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
