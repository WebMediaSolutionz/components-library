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
