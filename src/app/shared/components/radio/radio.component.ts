import { Component, OnInit, Input } from '@angular/core';

import { Radio } from '../../custom-types/form-fields/radio';

@Component({
  moduleId: module.id,
  selector: 'app-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.scss']
})
export class RadioComponent implements OnInit {

  public fieldProperties: Radio;

  @Input() public fieldSpecs: Radio = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
