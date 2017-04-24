import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { radioGroup } from '../../custom-types/form-fields/interfaces/radio-group';

@Component({
  moduleId: module.id,
  selector: 'app-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  public fieldProperties: radioGroup;

  @Input() public fieldSpecs: radioGroup = null;

  @Input() public group: FormGroup = null;

  @Input() public formSubmitted: boolean = false;

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

  public uncheckOthers(value: string): void {
    this.fieldProperties.items.forEach((item) => {
      if (item.value !== value) {
        item.checked = false;
      }
    });
  }

}
