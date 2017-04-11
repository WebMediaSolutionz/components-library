import { Field } from './field';

export interface Number extends Field {
    min?: ( number | string );

    max?: ( number | string );

    step?: ( number | string );
}
