import { InputType } from '../enums/input-type.enum';
import { button } from '../interfaces/button';
import { Field } from './field';

export class Button extends Field implements button {
    public type: InputType = InputType.button;

    public value: string = 'button';

    constructor(button?: button) {
        super(button);
    }
}
