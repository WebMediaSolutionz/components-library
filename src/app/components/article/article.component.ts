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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
        .params
        .subscribe((params) => {
          this.dataStructure = params['data_structure'];
          this.dataType = params['data_type'];
        });

    this.description = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;
  }

}
