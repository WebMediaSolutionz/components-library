import { InputType } from '../enums/input-type.enum';
import { field } from './field';

export interface fieldGroup {
    type: InputType;

    title?: string;
    
    items: field[];
}
