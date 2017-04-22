import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';
import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';

import { textarea } from '../../custom-types/form-fields/interfaces/textarea';
import { Prompt } from '../../custom-types/form-fields/classes/prompt';

@Component({
  moduleId: module.id,
  selector: 'app-textarea',
  templateUrl: 'textarea.component.html',
  styleUrls: ['textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  public fieldProperties: textarea;

  @Input() public fieldSpecs: textarea = null;

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
