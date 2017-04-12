import { Component, OnInit, Input } from '@angular/core';

import { Dropdown } from '../../custom-types/form-fields/dropdown';

@Component({
  moduleId: module.id,
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public fieldProperties: Dropdown;

  @Input() public fieldSpecs: Dropdown = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
