import { InputType } from '../enums/input-type.enum';
import { checkboxGroup } from '../interfaces/checkbox-group';
import { FieldGroup } from '../classes/field-group';
import { Checkbox } from '../classes/checkbox';

export class CheckboxGroup extends FieldGroup implements checkboxGroup {
    public type: InputType = InputType.checkboxgroup;

    public items: Checkbox[];

    constructor(checkboxGroup?: checkboxGroup) {
        super(checkboxGroup);
    }
}
