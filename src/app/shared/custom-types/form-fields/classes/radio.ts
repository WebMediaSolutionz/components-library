import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { radio } from '../interfaces/radio';

export class Radio extends Field implements radio {
    public type: InputType = InputType.button;

    public name: string;

    public value: string;

    public label: string;

    public checked?: boolean = false;

    constructor(radio?: radio) {
        super(radio);

        this.checked = (radio.checked !== undefined) ? radio.checked : this.checked;
    }
}
