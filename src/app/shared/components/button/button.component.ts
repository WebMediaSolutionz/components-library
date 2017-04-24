import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { button } from '../../custom-types/form-fields/interfaces/button';

@Component({
  moduleId: module.id,
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {

  public fieldProperties: button;

  @Input() public fieldSpecs: button = null;

  @Input() public group: FormGroup = null;

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
