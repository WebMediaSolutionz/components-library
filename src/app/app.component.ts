import { Component } from '@angular/core';

import { Field } from './shared/model/field';

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

  constructor() {
    this.textField = new Field({
      id: 'textbox',
      name: 'textbox',
      labelTxt: 'textbox',
      placeholderTxt:'enter text here'
    });

    this.passwordField = new Field({
      id: 'password',
      type: 'password',
      name: 'password',
      labelTxt: 'password',
      placeholderTxt:'enter password here'
    });

    this.radioField1 = new Field({
      id: 'radio',
      type: 'radio',
      name: 'radio',
      labelTxt: 'radio1',
      checked: false
    });

    this.radioField2 = new Field({
      id: 'radio',
      type: 'radio',
      name: 'radio',
      labelTxt: 'radio2',
      checked: true
    });

    this.checkboxField1 = new Field({
      id: 'checkbox',
      type: 'checkbox',
      name: 'checkbox1',
      labelTxt: 'checkbox1'
    });

    this.checkboxField2 = new Field({
      id: 'checkbox',
      type: 'checkbox',
      name: 'checkbox2',
      labelTxt: 'checkbox2'
    });

    this.numberField = new Field({
      id: 'number',
      type: 'number',
      name: 'number',
      labelTxt: 'number',
      min: '1',
      max: '10',
      step: '1',
      value: '0'
    });
  }
}
