import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// Custom Types

// Enums
import { InputType } from '../../shared/custom-types/form-fields/enums/input-type.enum';

// Interfaces
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
import { radioGroup } from '../../shared/custom-types/form-fields/interfaces/radio-group';
import { checkboxGroup } from '../../shared/custom-types/form-fields/interfaces/checkbox-group';

// Classes
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
import { RadioGroup } from '../../shared/custom-types/form-fields/classes/radio-group';
import { CheckboxGroup } from '../../shared/custom-types/form-fields/classes/checkbox-group';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'component library';

  public textField: Textbox;

  public passwordField: Password;

  public radioField1: Radio;

  public radioField2: Radio;

  public radioField3: Radio;

  public radios: RadioGroup;

  public checkboxField1: Checkbox;

  public checkboxField2: Checkbox;

  public checkboxField3: Checkbox;

  public checkboxes: CheckboxGroup;

  public numberField: NumberField;

  public dropdownField: Dropdown;

  public textareaField: Textarea;

  public buttonField: Button;

  public myForm: FormGroup;

  public formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.formSubmitted = false;

    this.initializeProperties();

    this.myForm = this.fb.group({
      username: [this.textField.value],
      password: [this.passwordField.value],
      favorite_color: [''],
      favorite_movies: this.fb.group({
        scareface: [this.checkboxField1.checked],
        godfather: [this.checkboxField2.checked],
        guardians: [this.checkboxField3.checked],
      }),
      age: [this.numberField.value],
      day: [this.dropdownField.getValue()],
      details: [this.textareaField.value]
    });
  }

  public onSubmit(form: any) {
    this.formSubmitted = true;
    console.info(form);

    let timer = Observable.timer(5000);
    timer.subscribe(t => this.formSubmitted = false);
  }

  public initializeProperties() {
    this.textField = new Textbox({
      type: InputType.textbox,
      name: 'username',
      placeholder: 'enter username',
      label: 'username',
      value: `some username`
    });

    this.passwordField = new Password({
      type: InputType.password,
      name: 'password',
      placeholder: 'enter password',
      label: 'password'
    });

    this.radioField1 = new Radio({
      type: InputType.radio,
      name: 'favorite_color',
      value: 'red',
      label: 'red',
      checked: false
    });

    this.radioField2 = new Radio({
      type: InputType.radio,
      name: 'favorite_color',
      value: 'blue',
      label: 'blue',
      checked: true
    });

    this.radioField3 = new Radio(this.radioField2);
    this.radioField3.value = this.radioField3.label = 'green';
    this.radioField3.checked = false;

    this.radios = new RadioGroup({
      type: InputType.radiogroup,
      title: 'what is your favorite color?',
      group_name: `favorite_color`,
      items: [this.radioField1, this.radioField2, this.radioField3]
    });

    this.checkboxField1 = new Checkbox({
      type: InputType.checkbox,
      name: 'favorite_movies',
      value: 'scareface',
      label: 'scareface',
      checked: true
    });

    this.checkboxField2 = new Checkbox({
      type: InputType.checkbox,
      name: 'favorite_movies',
      value: 'godfather',
      label: 'the godfather',
      checked: true
    });

    this.checkboxField3 = new Checkbox(this.checkboxField2);

    this.checkboxField3.value = 'guardians';
    this.checkboxField3.label = 'guardians of the galaxy';
    this.checkboxField3.checked = false;

    this.checkboxes = new CheckboxGroup({
      type: InputType.checkboxgroup,
      title: `what's your favorite movies?`,
      group_name: `favorite_movies`,
      items: [this.checkboxField1, this.checkboxField2, this.checkboxField3]
    });

    this.numberField = new NumberField({
      type: InputType.number,
      name: 'age',
      label: `how old are you?`,
      value: 1,
      min: 0,
      max: 5,
      step: 1
    });

    this.dropdownField = new Dropdown({
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
    });

    this.textareaField = new Textarea({
      type: InputType.textarea,
      name: 'details',
      label: `any details to add?`,
      placeholder: 'enter details',
      value: `lorem ipsum`,
      rows: 5,
      cols: 100
    });

    this.buttonField = new Button({
      type: InputType.button,
      value: 'button'
    });
  }
}
