import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { textarea } from '../interfaces/textarea';

export class Textarea extends Field implements textarea {
    public type: InputType = InputType.textarea;

    public name: string;

    public rows?: ( number | string );

    public cols?: ( number | string );

    constructor(textarea?: textarea) {
        super(textarea);

        this.rows = (textarea.rows) ? textarea.rows : null;
        this.cols = (textarea.cols) ? textarea.cols : null;
    }
}