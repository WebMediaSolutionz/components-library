import { field } from './field';
import { option } from './option';

// tslint:disable-next-line
export interface dropdown extends field {
    name: string;

    options: option[];
}
