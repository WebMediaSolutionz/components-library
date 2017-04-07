import { Component } from '@angular/core';

import { Field } from './shared/model/field';
import { Option } from './shared/model/option';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private title: string = 'component library';

  private textField: Field;

  private passwordField: Field;

  private radioField1: Field;

  private radioField2: Field;

  private checkboxField1: Field;

  private checkboxField2: Field;

  private numberField: Field;

  private dropdownField: Field;

  private textareaField: Field;

  private buttonField: Field;

  private submitField: Field;

  constructor() {
    this.textField = new Field({
      type: 'text',
      name: 'textbox',
      labelTxt: 'textbox',
      placeholderTxt:'enter text here'
    });

    this.passwordField = new Field({
      type: 'password',
      name: 'password',
      labelTxt: 'password',
      placeholderTxt:'enter password here'
    });

    this.radioField1 = new Field({
      type: 'radio',
      name: 'radio',
      labelTxt: 'radio1',
      checked: false
    });

    this.radioField2 = new Field({
      type: 'radio',
      name: 'radio',
      labelTxt: 'radio2',
      checked: true
    });

    this.checkboxField1 = new Field({
      type: 'checkbox',
      name: 'checkbox1',
      labelTxt: 'checkbox1'
    });

    this.checkboxField2 = new Field({
      type: 'checkbox',
      name: 'checkbox2',
      labelTxt: 'checkbox2',
      checked: true
    });

    this.numberField = new Field({
      type: 'number',
      name: 'number',
      labelTxt: 'number',
      min: '1',
      max: '10',
      step: '1',
      value: '0'
    });

    this.dropdownField = new Field({
      type: 'dropdown',
      name: 'dropdown',
      labelTxt: 'dropdown',
      options: [
        new Option('1', 'option 1'),
        new Option('2', 'option 2'),
        new Option('3', 'option 3', true),
        new Option('4', 'option 4'),
      ]
    });

    this.textareaField = new Field({
      type: 'textarea',
      name: 'textarea',
      labelTxt: 'textarea',
      value: 'lorem ipsum lorem ipsum lorem ipsum'
    });

    this.buttonField = new Field({
      type: 'button',
      name: 'button',
      labelTxt: 'button',
      value: 'button'
    });

    this.submitField = new Field({
      type: 'submit',
      name: 'submit',
      labelTxt: 'submit',
      value: 'submit'
    });
  }
}
