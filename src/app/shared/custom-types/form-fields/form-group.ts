import { InputType } from './input-type.enum';
import { Radio } from './radio';
import { Checkbox } from './checkbox';

export interface FormGroup {
    type: InputType;
    title?: string;
    items: ( Radio | Checkbox )[];
}
