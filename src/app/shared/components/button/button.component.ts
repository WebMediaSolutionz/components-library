import { Component, OnInit, Input } from '@angular/core';

import { Button } from '../../custom-types/form-fields/button';

@Component({
  moduleId: module.id,
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {

  public fieldProperties: Button;

  @Input() public fieldSpecs: Button = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
