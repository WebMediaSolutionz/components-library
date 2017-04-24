import { InputType } from '../enums/input-type.enum';
import { field } from './field';

// tslint:disable-next-line
export interface fieldGroup {
    type: InputType;

    title?: string;

    groupName: string;

    items: field[];
}
