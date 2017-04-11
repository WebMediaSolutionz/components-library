import { Field } from './field';

export interface Checkbox extends Field {
    name: string;

    value: string;

    checked?: boolean;

    label: string;
}
