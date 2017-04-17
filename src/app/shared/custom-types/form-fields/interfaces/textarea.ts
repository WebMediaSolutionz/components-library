import { field } from './field';

export interface textarea extends field {
    name: string;

    rows?: ( number | string );

    cols?: ( number | string );
}
