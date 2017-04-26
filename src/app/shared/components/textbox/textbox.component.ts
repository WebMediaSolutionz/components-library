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

  public promptVisibility: boolean = false;

  public prompt: Prompt;

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }

    this.prompt = new Prompt({
      msg: `the ${this.fieldProperties.name} is required`,
      status: PromptType.error,
      style: PromptStyle.simple
    });
  }

  public ngOnChanges() {
    this.managePrompt();
  }

  public managePrompt() {
    if (this.fieldProperties !== undefined) {
      let componentErrors = this.group.controls[this.fieldProperties.name].errors;

      if (componentErrors !== undefined) {
        let errors: string[] = [];

        for (let error in componentErrors) {
          if (componentErrors.hasOwnProperty(error)) {
            errors.push(error);
          }
        }

        if (errors[0] !== undefined) {
          this.prompt.msg = `error: ${errors[0]}`;
        }
      }

      this.promptVisibility = ( this.group.controls[this.fieldProperties.name].invalid &&
                                this.group.controls[this.fieldProperties.name].dirty ) ||
                              ( this.group.controls[this.fieldProperties.name].invalid &&
                                this.formSubmitted );
    }
  }
}
