import { field } from './field';

export interface radio extends field {
    name: string;

    value: string;

    label: string;

    checked?: boolean;
}
