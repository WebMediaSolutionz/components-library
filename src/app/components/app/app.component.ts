import { Component } from '@angular/core';

// Custom Types
import { InputType } from '../../shared/custom-types/form-fields/input-type.enum';
import { Field } from '../../shared/custom-types/form-fields/field';
import { Textbox } from '../../shared/custom-types/form-fields/textbox';
import { Password } from '../../shared/custom-types/form-fields/password';
import { Radio } from '../../shared/custom-types/form-fields/radio';
import { Checkbox } from '../../shared/custom-types/form-fields/checkbox';
import { Number } from '../../shared/custom-types/form-fields/number';
import { Dropdown } from '../../shared/custom-types/form-fields/dropdown';
import { Textarea } from '../../shared/custom-types/form-fields/textarea';
import { Button } from '../../shared/custom-types/form-fields/button';
import { Submit } from '../../shared/custom-types/form-fields/submit';
import { FormGroup } from '../../shared/custom-types/form-fields/form-group';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public title = 'component library';

  public textField: Textbox;

  public passwordField: Password;

  public radioField1: Radio;

  public radioField2: Radio;

  public radios: FormGroup;

  public checkboxField1: Checkbox;

  public checkboxField2: Checkbox;

  public checkboxes: FormGroup;

  public numberField: Number;

  public dropdownField: Dropdown;

  public textareaField: Textarea;

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

    this.buttonField = {
      type: InputType.button,
      value: 'button'
    };

    this.submitField = {
      type: InputType.submit,
      value: 'submit'
    };
  }
}
