import { Component, OnInit, Input } from '@angular/core';

import { radio } from '../../custom-types/form-fields/interfaces/radio';

@Component({
  moduleId: module.id,
  selector: 'app-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.scss']
})
export class RadioComponent implements OnInit {

  public fieldProperties: radio;

  @Input() public fieldSpecs: radio = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
