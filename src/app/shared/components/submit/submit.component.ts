import { Component, OnInit, Input } from '@angular/core';

import { Submit } from '../../custom-types/form-fields/submit';

@Component({
  moduleId: module.id,
  selector: 'app-submit',
  templateUrl: 'submit.component.html',
  styleUrls: ['submit.component.scss']
})
export class SubmitComponent implements OnInit {

  public fieldProperties: Submit;

  @Input() public fieldSpecs: Submit = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
