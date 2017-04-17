import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { password } from '../interfaces/password';

export class Password extends Field implements password {
    public type: InputType = InputType.password;

    public name: string;

    public value?: string;

    constructor(password?: password) {
        super(password);
    }
}