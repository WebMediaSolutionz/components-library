import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';
import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';

import { dropdown } from '../../custom-types/form-fields/interfaces/dropdown';
import { Prompt } from '../../custom-types/form-fields/classes/prompt';

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

  @Input() public formSubmitted: boolean = false;

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
