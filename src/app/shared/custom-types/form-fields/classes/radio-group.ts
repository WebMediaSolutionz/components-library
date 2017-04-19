import { InputType } from '../enums/input-type.enum';
import { radioGroup } from '../interfaces/radio-group';
import { FieldGroup } from '../classes/field-group';
import { Radio } from '../classes/radio';

export class RadioGroup extends FieldGroup implements radioGroup {
    public type: InputType = InputType.radiogroup;

    public items: Radio[];

    constructor(radioGroup?: radioGroup) {
        super(radioGroup);
    }
}