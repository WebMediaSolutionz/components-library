import { field } from './field';

// tslint:disable-next-line
export interface numberField extends field {
    min?: ( number | string );

    max?: ( number | string );

    step?: ( number | string );
}
