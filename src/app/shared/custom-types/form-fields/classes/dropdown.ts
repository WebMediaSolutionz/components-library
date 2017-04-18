import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { dropdown } from '../interfaces/dropdown';
import { Option } from './option';

export class Dropdown extends Field implements dropdown {
    public type: InputType = InputType.dropdown;

    public name: string;

    public options: Option[];

    constructor(dropdown: dropdown) {
        super(dropdown);

        this.options = (dropdown.options !== undefined) ? dropdown.options : []; 
    }
}