import { PromptType } from '../enums/prompt-type.enum';
import { PromptStyle } from '../enums/prompt-style.enum';

// tslint:disable-next-line
export interface prompt {
    msg?: any;

    style?: PromptStyle;

    status?: PromptType;
}
