import { Component, OnInit, Input } from '@angular/core';

import { InputType } from '../../custom-types/form-fields/input-type.enum';
import { Field } from '../../custom-types/form-fields/field';
import { Radio } from '../../custom-types/form-fields/radio';

@Component({
  moduleId: module.id,
  selector: 'app-form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  public inputType = InputType;

  public type: string;

  public fieldProperties: Field;

  @Input() public fieldSpecs: Field = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;

      this
        .safeGuard()
        .setType();
    }
  }

  private safeGuard(): FormFieldComponent {
    this.fieldProperties.value =  ( this.fieldProperties.value !== undefined ) ?
                                    this.fieldProperties.value : '';

    this.fieldProperties.placeholder =  ( this.fieldProperties.placeholder !== undefined ) ?
                                        this.fieldProperties.placeholder : '';

    this.fieldProperties.label =  ( this.fieldProperties.label !== undefined ) ?
                                  this.fieldProperties.label : '';

    return this;
  }

  private setType(): FormFieldComponent {
    switch (this.fieldProperties.type) {
        case this.inputType.textbox:        this.type = 'text';
                                            break;

        case this.inputType.submit:         this.type = 'submit';
                                            break;

        case this.inputType.radio:
        case this.inputType.radiogroup:     this.type = 'radio';
                                            break;

        case this.inputType.checkbox:
        case this.inputType.checkboxgroup:  this.type = 'checkbox';
                                            break;

        case this.inputType.dropdown:       this.type = 'dropdown';
                                            break;

        case this.inputType.textarea:       this.type = 'textarea';
                                            break;

        case this.inputType.button:         this.type = 'button';
                                            break;

        case this.inputType.number:         this.type = 'number';
                                            break;

        case this.inputType.password:       this.type = 'password';
                                            break;
      }

      return this;
  }

}
