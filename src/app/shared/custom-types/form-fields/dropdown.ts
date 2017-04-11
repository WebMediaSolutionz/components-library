import { Field } from './field';
import { Option } from './option';

export interface Dropdown extends Field {
    name: string;

    options: Option[];
}
