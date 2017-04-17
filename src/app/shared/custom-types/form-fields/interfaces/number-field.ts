import { field } from './field';

export interface numberField extends field {
    min?: ( number | string );

    max?: ( number | string );

    step?: ( number | string );
}
