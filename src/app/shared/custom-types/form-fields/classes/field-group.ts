import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { fieldGroup } from '../interfaces/field-group';

export class FieldGroup implements fieldGroup {
    public type: InputType = InputType.fieldgroup;

    public title?: string;

    public groupName: string;

    public items: Field[];

    constructor(fieldGroup?: fieldGroup) {
        if (fieldGroup) {
            this.type = (fieldGroup.type !== undefined) ? fieldGroup.type : this.type;
            this.title = (fieldGroup.title !== undefined) ? fieldGroup.title : null;
            this.groupName = (fieldGroup.groupName !== undefined) ? fieldGroup.groupName : null;
            this.items = (fieldGroup.items !== undefined) ? fieldGroup.items : null;
        }
    }
}
