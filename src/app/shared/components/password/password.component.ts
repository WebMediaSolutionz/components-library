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

  public prompt: Prompt;

  public promptMsg: string;

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }

    this.prompt = new Prompt({
      msg: `the ${this.fieldProperties.name} is required`,
      status: PromptType.error,
      style: PromptStyle.simple
    });

    this.promptMsg = this.prompt.msg;
  }

  public ngOnChanges() {
    if (this.fieldProperties !== undefined) {
      if ( this.group.controls[this.fieldProperties.name].hasError('required') ) {
        this.promptMsg = this.prompt.msg;
      }
    }
  }
}
