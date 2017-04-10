import { Field } from './field';

export interface Password extends Field {
    name: string;

    value?: string;
}
