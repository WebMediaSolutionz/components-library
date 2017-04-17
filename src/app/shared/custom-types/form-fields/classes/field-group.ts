import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { fieldGroup } from '../interfaces/field-group';

export class FieldGroup implements fieldGroup {
    public type: InputType = InputType.fieldgroup;

    public title?: string;

    public items: Field[];

    constructor(fieldGroup?: fieldGroup) {
        if (fieldGroup) {
            this.type = (fieldGroup.type) ? fieldGroup.type : this.type;
            this.title = (fieldGroup.title) ? fieldGroup.title : null;
            this.items = (fieldGroup.items) ? fieldGroup.items : null;
        }
    }
}