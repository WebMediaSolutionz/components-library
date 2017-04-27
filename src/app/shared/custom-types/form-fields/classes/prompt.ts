import { FormGroup } from '@angular/forms';

import { field } from '../interfaces/field';
import { prompt } from '../interfaces/prompt';
import { PromptStyle } from '../enums/prompt-style.enum';
import { PromptType } from '../enums/prompt-type.enum';

export class Prompt implements prompt {
    public msg: string = `some prompt`;

    public msgArr?: string[] = [];

    public style: PromptStyle = PromptStyle.bubble;

    public status: PromptType = PromptType.success;

    constructor(prompt?: prompt) {
        if (prompt) {
            this.msg = (prompt.msg !== undefined) ? prompt.msg : this.msg;
            this.msgArr = (prompt.msgArr !== undefined) ? prompt.msgArr : this.msgArr;
            this.style = (prompt.style !== undefined) ? prompt.style : this.style;
            this.status = (prompt.status !== undefined) ? prompt.status : this.status;
        }

        this.msgArr['default'] = `this is invalid`;
    }

    public setTextValueAutomatically(fieldProperties: field, group: FormGroup) {
        let componentErrors = group.controls[fieldProperties.name].errors;

        if (componentErrors !== undefined) {
            let errors: string[] = [];

            for (let error in componentErrors) {
                if (componentErrors.hasOwnProperty(error)) {
                    errors.push(error);
                }
            }

            if (errors[0] !== undefined) {
                this.msg = (this.msgArr[errors[0]] !== undefined) ? `error: ${this.msgArr[errors[0]]}`: `error: ${this.msgArr['default']}`;
            }
        }
    }
}
