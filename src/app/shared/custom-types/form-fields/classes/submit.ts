import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { submit } from '../interfaces/submit';

export class Submit extends Field implements submit {
    public type: InputType = InputType.button;

    public value: string = 'submit';

    constructor(submit?: submit) {
        super(submit);
    }
}