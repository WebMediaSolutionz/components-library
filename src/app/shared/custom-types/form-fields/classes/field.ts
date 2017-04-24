import { field } from '../interfaces/field';
import { InputType } from '../enums/input-type.enum';

export class Field implements field {
    public type: InputType = InputType.field;

    public name?: string;

    public value?: (string | number);

    public placeholder?: string;

    public label?: string;

    constructor(field?: field) {
        if ( field ) {
            this.type = (field.type !== undefined) ? field.type : this.type;
            this.name = (field.name !== undefined) ? field.name : null;
            this.value = (field.value !== undefined) ? field.value : null;
            this.placeholder = (field.placeholder !== undefined) ? field.placeholder : null;
            this.label = (field.label !== undefined) ? field.label : null;
        }
    }
}
