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
      status: PromptType.error,
      style: PromptStyle.simple
    });

    this.prompt.msgArr['required'] = `this field is required`;
    this.prompt.msgArr['maxlength'] = `this field exceeds the maximum length`;
  }

  public ngOnChanges() {
    if (  this.prompt !== undefined &&
          this.fieldProperties !== undefined &&
          this.fieldProperties.name !== undefined ) {
      this.prompt.setTextValueAutomatically(this.fieldProperties, this.group);

      this.promptVisibility = ( this.group.controls[this.fieldProperties.name].invalid &&
                                this.group.controls[this.fieldProperties.name].dirty ) ||
                              ( this.group.controls[this.fieldProperties.name].invalid &&
                                this.formSubmitted );
    }
  }
}
