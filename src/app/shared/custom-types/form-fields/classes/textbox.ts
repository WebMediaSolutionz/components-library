import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { textbox } from '../interfaces/textbox';

export class Textbox extends Field implements textbox {
    public type: InputType = InputType.textbox;

    public name: string;

    public value?: string;

    constructor(textbox?: textbox) {
        super(textbox);
    }
}
