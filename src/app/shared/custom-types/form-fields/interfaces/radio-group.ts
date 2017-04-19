import { InputType } from '../enums/input-type.enum';
import { fieldGroup } from './field-group';
import { radio } from './radio';

export interface radioGroup extends fieldGroup {
    items: radio[];
}
