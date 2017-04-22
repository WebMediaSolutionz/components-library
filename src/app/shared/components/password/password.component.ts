import { Component, OnInit, Input } from '@angular/core';
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
export class PasswordComponent implements OnInit {

  public fieldProperties: password;

  @Input() public fieldSpecs: password = null;

  @Input() public group: FormGroup = null;

  @Input() public formSubmitted: boolean = false;

  public prompt: Prompt;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }

    this.prompt = new Prompt({
      msg: `password is invalid`,
      style: PromptStyle.simple,
      status: PromptType.error
    });
  }

}
