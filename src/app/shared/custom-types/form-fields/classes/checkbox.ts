import { InputType } from '../enums/input-type.enum';
import { checkbox } from '../interfaces/checkbox';
import { Field } from './field';

export class Checkbox extends Field implements checkbox {
    public type: InputType = InputType.checkbox;

    public name: string;

    public value: string;

    public label: string;

    public checked?: boolean = false;

    constructor(checkbox: checkbox) {
        super(checkbox);

        this.checked = (checkbox.checked) ? checkbox.checked : this.checked;
    }
}