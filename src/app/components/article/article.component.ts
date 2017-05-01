import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public dataStructure: string;

  public dataType: string;

  public description: string;

  public content: string = '';

  public contentMatrix: string[][];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeContentMatrix();

    this.activatedRoute
        .params
        .subscribe((params) => {
          this.dataStructure = params['data_structure'];
          this.dataType = (params['data_type'] !== undefined) ? params['data_type'] : 'default';

          if (this.dataStructure !== undefined && this.dataType !== undefined) {
            this.content = this.contentMatrix[this.dataStructure][this.dataType];
          }
        });

    this.description = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;
  }

  public initializeContentMatrix(): void {
    this.contentMatrix = [];

    this.contentMatrix['enums'] = [];
    this.contentMatrix['enums']['default'] = `enums default page`;
    this.contentMatrix['enums']['input-type'] = `input type`;
    this.contentMatrix['enums']['prompt-style'] = `prompt style`;
    this.contentMatrix['enums']['prompt-type'] = `prompt type`;

    this.contentMatrix['types'] = [];
    this.contentMatrix['types']['default'] = `types default page`;
    this.contentMatrix['types']['field'] = `field`;
    this.contentMatrix['types']['field-group'] = `field group`;
    this.contentMatrix['types']['textbox'] = `textbox`;
    this.contentMatrix['types']['password'] = `password`;
    this.contentMatrix['types']['radio-button'] = `radio button`;
    this.contentMatrix['types']['radio-group'] = `radio group`;
    this.contentMatrix['types']['checkbox'] = `checkbox`;
    this.contentMatrix['types']['checkbox-group'] = `checkbox group`;
    this.contentMatrix['types']['number'] = `number`;
    this.contentMatrix['types']['dropdown'] = `dropdown`;
    this.contentMatrix['types']['option'] = `option`;
    this.contentMatrix['types']['textarea'] = `textarea`;
    this.contentMatrix['types']['button'] = `button`;
    this.contentMatrix['types']['submit-button'] = `submit button`;
    this.contentMatrix['types']['prompt'] = `prompt`;

    this.contentMatrix['classes'] = [];
    this.contentMatrix['classes']['default'] = `classes default page`;
    this.contentMatrix['classes']['field'] = `field`;
    this.contentMatrix['classes']['field-group'] = `field group`;
    this.contentMatrix['classes']['textbox'] = `textbox`;
    this.contentMatrix['classes']['password'] = `password`;
    this.contentMatrix['classes']['radio-button'] = `radio button`;
    this.contentMatrix['classes']['radio-group'] = `radio group`;
    this.contentMatrix['classes']['checkbox'] = `checkbox`;
    this.contentMatrix['classes']['checkbox-group'] = `checkbox group`;
    this.contentMatrix['classes']['number'] = `number`;
    this.contentMatrix['classes']['dropdown'] = `dropdown`;
    this.contentMatrix['classes']['option'] = `option`;
    this.contentMatrix['classes']['textarea'] = `textarea`;
    this.contentMatrix['classes']['button'] = `button`;
    this.contentMatrix['classes']['submit-button'] = `submit button`;
    this.contentMatrix['classes']['prompt'] = `prompt`;

    this.contentMatrix['components'] = [];
    this.contentMatrix['components']['default'] = `components default page`;
    this.contentMatrix['components']['form-field'] = `form field`;
    this.contentMatrix['components']['textbox-field'] = `textbox field`;
    this.contentMatrix['components']['password-field'] = `password field`;
    this.contentMatrix['components']['radio-button-field'] = `radio button field`;
    this.contentMatrix['components']['radio-group'] = `radio button`;
    this.contentMatrix['components']['checkbox-field'] = `checkbox field`;
    this.contentMatrix['components']['checkbox-group'] = `checkbox group`;
    this.contentMatrix['components']['number-field'] = `number field`;
    this.contentMatrix['components']['dropdown-field'] = `dropdown field`;
    this.contentMatrix['components']['textarea-field'] = `textarea field`;
    this.contentMatrix['components']['button-field'] = `button field`;
    this.contentMatrix['components']['submit-button-field'] = `submit button field`;
    this.contentMatrix['components']['prompt'] = `prompt`;

    this.contentMatrix['examples'] = [];
    this.contentMatrix['examples']['default'] = `examples default page`;
    this.contentMatrix['examples']['form'] = `form example`;
  }

}
