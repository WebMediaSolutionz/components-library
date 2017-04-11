import { InputType } from './input-type.enum';

export interface Field {
    type: InputType;

    name?: string;

    value?: (string | number);

    placeholder?: string;

    label?: string;
}
