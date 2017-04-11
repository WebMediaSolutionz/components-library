import { Field } from './field';

export interface Radio extends Field {
    name: string;

    value: string;

    checked?: boolean;

    label: string;
}
