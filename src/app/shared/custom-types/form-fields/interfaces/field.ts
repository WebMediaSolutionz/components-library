import { InputType } from '../enums/input-type.enum';

// tslint:disable-next-line
export interface field {
    type: InputType;

    name?: string;

    value?: (string | number);

    placeholder?: string;

    label?: string;
}
