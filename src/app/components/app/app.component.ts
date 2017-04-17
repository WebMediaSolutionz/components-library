import { Component } from '@angular/core';

// Custom Types
import { InputType } from '../../shared/custom-types/form-fields/enums/input-type.enum';
import { field } from '../../shared/custom-types/form-fields/interfaces/field';
import { textbox } from '../../shared/custom-types/form-fields/interfaces/textbox';
import { password } from '../../shared/custom-types/form-fields/interfaces/password';
import { radio } from '../../shared/custom-types/form-fields/interfaces/radio';
import { checkbox } from '../../shared/custom-types/form-fields/interfaces/checkbox';
import { numberField } from '../../shared/custom-types/form-fields/interfaces/number-field';
import { dropdown } from '../../shared/custom-types/form-fields/interfaces/dropdown';
import { textarea } from '../../shared/custom-types/form-fields/interfaces/textarea';
import { button } from '../../shared/custom-types/form-fields/interfaces/button';
import { submit } from '../../shared/custom-types/form-fields/interfaces/submit';
import { fieldGroup } from '../../shared/custom-types/form-fields/interfaces/field-group';

import { Field } from '../../shared/custom-types/form-fields/classes/field';
import { Textbox } from '../../shared/custom-types/form-fields/classes/textbox';
import { Password } from '../../shared/custom-types/form-fields/classes/password';
import { Radio } from '../../shared/custom-types/form-fields/classes/radio';
import { Checkbox } from '../../shared/custom-types/form-fields/classes/checkbox';
import { NumberField } from '../../shared/custom-types/form-fields/classes/number-field';
import { Dropdown } from '../../shared/custom-types/form-fields/classes/dropdown';
import { Textarea } from '../../shared/custom-types/form-fields/classes/textarea';
import { Button } from '../../shared/custom-types/form-fields/classes/button';
import { Submit } from '../../shared/custom-types/form-fields/classes/submit';
import { FieldGroup } from '../../shared/custom-types/form-fields/classes/field-group';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public title = 'component library';

  public textField: textbox;

  public passwordField: password;

  public radioField1: radio;

  public radioField2: radio;

  public radios: fieldGroup;

  public checkboxField1: checkbox;

  public checkboxField2: checkbox;

  public checkboxes: fieldGroup;

  public numberField: numberField;

  public dropdownField: dropdown;

  public textareaField: textarea;

  public buttonField: Button;

  public submitField: Submit;

  constructor() {
    this.textField = {
      type: InputType.textbox,
      name: 'username',
      placeholder: 'enter username',
      label: 'username'
    };

    this.passwordField = {
      type: InputType.password,
      name: 'password',
      placeholder: 'enter password',
      label: 'password'
    };

    this.radioField1 = {
      type: InputType.radio,
      name: 'favorite_color',
      value: 'red',
      label: 'red'
    };

    this.radioField2 = {
      type: InputType.radio,
      name: 'favorite_color',
      value: 'blue',
      label: 'blue',
      checked: true
    };

    this.radios = {
      type: InputType.radiogroup,
      title: 'what is your favorite color?',
      items: [this.radioField1, this.radioField2]
    };

    this.checkboxField1 = {
      type: InputType.checkbox,
      name: 'favorite_movies',
      value: 'scareface',
      label: 'scareface',
      checked: true
    };

    this.checkboxField2 = {
      type: InputType.checkbox,
      name: 'favorite_movies',
      value: 'the_godfather',
      label: 'the godfather',
      checked: true
    };

    this.checkboxes = {
      type: InputType.checkboxgroup,
      title: `what's your favorite movies?`,
      items: [this.checkboxField1, this.checkboxField2]
    };

    this.numberField = {
      type: InputType.number,
      name: 'age',
      label: `how old are you?`,
      value: 0,
      min: 0,
      max: 5,
      step: 1
    };

    this.dropdownField = {
      type: InputType.dropdown,
      name: 'day',
      label: `what day of the week is it?`,
      options: [
        {
          value: 'mon',
          text: 'monday'
        },
        {
          value: 'tue',
          text: 'tuesday'
        },
        {
          value: 'wed',
          text: 'wednesday',
          selected: true
        },
        {
          value: 'thu',
          text: 'thursday'
        },
        {
          value: 'fri',
          text: 'friday'
        }
      ]
    };

    this.textareaField = {
      type: InputType.textarea,
      name: 'details',
      label: `any details to add?`,
      placeholder: 'enter details',
      value: `lorem ipsum`,
      rows: 5,
      cols: 100
    };

    this.buttonField = new Button();

    this.submitField = new Submit();
  }
}
