import { PromptType } from '../enums/prompt-type.enum';
import { PromptStyle } from '../enums/prompt-style.enum';

export interface prompt {
    msg?: string;
    
    style?: PromptStyle;

    status?: PromptType;
}
