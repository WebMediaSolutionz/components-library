import { field } from './field';

export interface password extends field {
    name: string;

    value?: string;
}
