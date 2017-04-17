import { Component, OnInit, Input } from '@angular/core';

import { submit } from '../../custom-types/form-fields/interfaces/submit';

@Component({
  moduleId: module.id,
  selector: 'app-submit',
  templateUrl: 'submit.component.html',
  styleUrls: ['submit.component.scss']
})
export class SubmitComponent implements OnInit {

  public fieldProperties: submit;

  @Input() public fieldSpecs: submit = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
