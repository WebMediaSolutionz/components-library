import { Field } from './field';

export interface Textarea extends Field {
    name: string;

    rows?: ( number | string );
    
    cols?: ( number | string );
}
