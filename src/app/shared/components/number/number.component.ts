import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';
import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';

import { numberField } from '../../custom-types/form-fields/interfaces/number-field';
import { Prompt } from '../../custom-types/form-fields/classes/prompt';

@Component({
  moduleId: module.id,
  selector: 'app-number',
  templateUrl: 'number.component.html',
  styleUrls: ['number.component.scss']
})
export class NumberComponent implements OnInit {

  public fieldProperties: numberField;

  @Input() public fieldSpecs: numberField = null;

  @Input() public group: FormGroup = null;

  @Input() public formSubmitted: boolean = false;

  public prompt: Prompt;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }

    this.prompt = new Prompt({
      msg: `this field is invalid`,
      style: PromptStyle.simple,
      status: PromptType.error
    });
  }

}
