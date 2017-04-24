import { field } from './field';

// tslint:disable-next-line
export interface checkbox extends field {
    name: string;

    value: string;

    label: string;

    checked?: boolean;
}
