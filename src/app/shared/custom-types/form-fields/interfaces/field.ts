import { InputType } from '../enums/input-type.enum';

export interface field {
    type: InputType;

    name?: string;

    value?: (string | number);

    placeholder?: string;

    label?: string;
}
