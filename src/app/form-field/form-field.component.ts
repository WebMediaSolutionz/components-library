import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  protected fieldProperties: object = {};

  @Input() private fieldSpecs: object;

  constructor() { }

  ngOnInit() {
  }

}
