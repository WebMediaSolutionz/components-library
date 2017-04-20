import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';
import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';

import { Prompt } from '../../custom-types/form-fields/interfaces/prompt';

@Component({
  moduleId: module.id,
  selector: 'app-prompt',
  templateUrl: 'prompt.component.html',
  styleUrls: ['prompt.component.scss']
})
export class PromptComponent implements OnInit, OnChanges {

  @Input() public visible: boolean = false;

  @Input() public atts: Prompt = null;

  public prompt_msg: string = `some prompt message`;
  
  public bubble: boolean = false;

  public status: PromptType = null;

  public success: boolean;

  public error: boolean;

  public warning: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.sortOutStatus();
  }

  public ngOnChanges(): void {
    this.sortOutStatus();
  }

  public sortOutStatus(): void {
    if (this.atts) {
      this.prompt_msg = this.atts.msg;
      this.bubble = (this.atts.style === PromptStyle.bubble);

      switch (this.atts.status) {
        case PromptType.error:    this.error = true;
                                  this.warning = false;
                                  this.success = false;
                                  break;

        case PromptType.warning:  this.error = false;
                                  this.warning = true;
                                  this.success = false;
                                  break;

        case PromptType.success:  this.error = false;
                                  this.warning = false;
                                  this.success = true;
                                  break;

        default:                  this.error = false;
                                  this.warning = false;
                                  this.success = false;
                                  break;
      }
    }
  }

}
