import { prompt } from '../interfaces/prompt';
import { PromptStyle } from '../enums/prompt-style.enum';
import { PromptType } from '../enums/prompt-type.enum';

export class Prompt implements prompt {
    public msg: string = `some prompt`;
    
    public style: PromptStyle = PromptStyle.bubble;

    public status: PromptType = PromptType.success;

    constructor(prompt?: prompt) {
        if (prompt) {
            this.msg = (prompt.msg !== undefined) ? prompt.msg : this.msg;
            this.style = (prompt.style !== undefined) ? prompt.style : this.style;
            this.status = (prompt.status !== undefined) ? prompt.status : this.status;
        }
    }
}
