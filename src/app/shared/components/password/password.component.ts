import { Component, OnInit, Input } from '@angular/core';

import { password } from '../../custom-types/form-fields/interfaces/password';

@Component({
  moduleId: module.id,
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.scss']
})
export class PasswordComponent implements OnInit {

  public fieldProperties: password;

  @Input() public fieldSpecs: password = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
