import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// services
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public dataStructure: string;

  public dataType: string;

  public content: string = '';

  public loadingText: string = 'Loading...';

  public contentLoaded: boolean = false;

  public currentLink;

  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleService) { }

  public ngOnInit(): void {
    this.activatedRoute
        .params
        .subscribe((params) => {
          this.contentLoaded = false;
          this.dataStructure = params['data_structure'];
          this.dataType = (params['data_type'] != undefined) ? params['data_type'] : 'default';

          if (this.dataStructure !== undefined && this.dataType !== undefined) {
            this.articleService
                .getArticles()
                .subscribe(
                  (data) => {
                    this.content = data[this.dataStructure][this.dataType];
                    this.currentLink = this.dataStructure;

                    if (this.dataType !== 'default') {
                      this.currentLink = `${this.dataStructure}_${this.dataType}`;

                      switch(this.dataStructure) {
                        case 'enums':         this.dataStructure = 'enum';
                                              break;

                        case 'interfaces':    this.dataStructure = 'interface';
                                              break;

                        case 'classes':       this.dataStructure = 'class';
                                              break;

                        case 'components':    this.dataStructure = 'component';
                                              break;
                      }
                    } else {
                      this.currentLink = this.dataStructure;
                    }
                  },
                  (error) => {
                    console.info(error);
                  },
                  () => {
                    Observable
                      .timer(500)
                      .subscribe((t) => {
                        this.contentLoaded = true;
                      });
                  });
          }
        });
  }
}
