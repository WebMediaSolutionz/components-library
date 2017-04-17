import { field } from './field';

export interface checkbox extends field {
    name: string;

    value: string;

    label: string;

    checked?: boolean;
}
