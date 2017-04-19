import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { checkbox } from '../../custom-types/form-fields/interfaces/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public fieldProperties: checkbox;

  @Input() public fieldSpecs: checkbox = null;

  @Input() public group: FormGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
