import { Field } from './field';

export interface Textbox extends Field {
    name: string;

    value?: string;
}
