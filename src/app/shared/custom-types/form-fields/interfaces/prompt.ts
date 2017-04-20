import { PromptType } from '../enums/prompt-type.enum';
import { PromptStyle } from '../enums/prompt-style.enum';

export interface Prompt {
    msg: string;
    
    style: PromptStyle;

    status: PromptType;
}
