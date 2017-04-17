import { field } from './field';
import { option } from './option';

export interface dropdown extends field {
    name: string;

    options: option[];
}
