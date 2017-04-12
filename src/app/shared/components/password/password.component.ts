import { Component, OnInit, Input } from '@angular/core';

import { Password } from '../../custom-types/form-fields/password';

@Component({
  moduleId: module.id,
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.scss']
})
export class PasswordComponent implements OnInit {

  public fieldProperties: Password;

  @Input() public fieldSpecs: Password = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
