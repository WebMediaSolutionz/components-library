import { InputType } from '../enums/input-type.enum';
import { fieldGroup } from './field-group';
import { checkbox } from './checkbox';

// tslint:disable-next-line
export interface checkboxGroup extends fieldGroup {
    items: checkbox[];
}
