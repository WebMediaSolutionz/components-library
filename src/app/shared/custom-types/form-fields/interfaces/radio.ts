import { field } from './field';

// tslint:disable-next-line
export interface radio extends field {
    name: string;

    value: string;

    label: string;

    checked?: boolean;
}
