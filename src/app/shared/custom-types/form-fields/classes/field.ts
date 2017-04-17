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
            this.type = (field.type) ? field.type : this.type;
            this.name = (field.name) ? field.name : null;
            this.value = (field.value) ? field.value : null;
            this.placeholder = (field.placeholder) ? field.placeholder : null;
            this.label = (field.label) ? field.label : null;
        }
    }
}