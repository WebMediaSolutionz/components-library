import { Component, OnInit, Input } from '@angular/core';

import { Number } from '../../custom-types/form-fields/number';

@Component({
  moduleId: module.id,
  selector: 'app-number',
  templateUrl: 'number.component.html',
  styleUrls: ['number.component.scss']
})
export class NumberComponent implements OnInit {

  public fieldProperties: Number;

  @Input() public fieldSpecs: Number = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
