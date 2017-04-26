import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';
import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';

import { password } from '../../custom-types/form-fields/interfaces/password';
import { Prompt } from '../../custom-types/form-fields/classes/prompt';

@Component({
  moduleId: module.id,
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.scss']
})
export class PasswordComponent implements OnInit, OnChanges {

  public fieldProperties: password;

  @Input() public fieldSpecs: password = null;

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
