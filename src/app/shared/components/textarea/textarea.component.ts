import { Component, OnInit, OnChanges, Input } from '@angular/core';
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
export class TextareaComponent implements OnInit, OnChanges {

  public fieldProperties: textarea;

  @Input() public fieldSpecs: textarea = null;

  @Input() public group: FormGroup = null;

  @Input() public formSubmitted: boolean = false;

  public prompt: Prompt;

  public prompt_msg: string;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }

    this.prompt = new Prompt({
      msg: {
        required: `the ${this.fieldProperties.name} is required`
      },
      status: PromptType.error,
      style: PromptStyle.simple
    });

    this.prompt_msg = this.prompt.msg.required;
  }

  public ngOnChanges() {
    if (this.fieldProperties !== undefined) {
      if ( this.group.controls[this.fieldProperties.name].hasError('required') ) {
        this.prompt_msg = this.prompt.msg.required;
      }
    }
  }
}
