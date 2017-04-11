import { Field } from './field';

export interface Textbox extends Field {
    min?: ( number | string );

    max?: ( number | string );
}
