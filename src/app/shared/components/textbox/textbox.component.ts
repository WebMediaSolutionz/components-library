import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { textbox } from '../../custom-types/form-fields/interfaces/textbox';
import { Prompt } from '../../custom-types/form-fields/classes/prompt';
import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';
import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';

@Component({
  moduleId: module.id,
  selector: 'app-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.scss']
})
export class TextboxComponent implements OnInit, OnChanges {

  public fieldProperties: textbox;

  @Input() public fieldSpecs: textbox = null;

  @Input() public group: FormGroup = null;

  @Input() public formSubmitted: boolean = false;

  public promptVisibility: boolean = true;

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
