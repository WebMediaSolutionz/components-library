import { field } from './field';

// tslint:disable-next-line
export interface textarea extends field {
    name: string;

    rows?: ( number | string );

    cols?: ( number | string );
}
