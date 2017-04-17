import { field } from './field';

export interface textbox extends field {
    name: string;

    value?: string;
}
