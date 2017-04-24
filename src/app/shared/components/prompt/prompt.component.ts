import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { PromptType } from '../../custom-types/form-fields/enums/prompt-type.enum';
import { PromptStyle } from '../../custom-types/form-fields/enums/prompt-style.enum';

import { Prompt } from '../../custom-types/form-fields/classes/prompt';

@Component({
  moduleId: module.id,
  selector: 'app-prompt',
  templateUrl: 'prompt.component.html',
  styleUrls: ['prompt.component.scss']
})
export class PromptComponent implements OnInit, OnChanges {

  @Input() public visible: boolean = false;

  @Input() public atts: Prompt = null;

  @Input()  public prompt_msg: string;
  
  public status: PromptType = null;

  public bubble: boolean = false;

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
    if (!this.atts) {
      this.atts = new Prompt();
    }

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
