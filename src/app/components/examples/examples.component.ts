import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  public example: string;

  public description: string;

  public currentLink = 'examples';

  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.example = this.currentLink = params['example'];
    });

    if (this.currentLink === undefined) {
      this.currentLink = 'examples';
    }

    this.description = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;
  }

}
