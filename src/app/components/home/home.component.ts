import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageTitle: string = 'welcome to the component library';

  public content: string;

  public currentLink: string = 'home';

  public ngOnInit(): void {
    this._initializeContent();
  }

  private _initializeContent(): void {
    this.content = `
    <h2 class="page_title capitalize underline center_text">${this.pageTitle}</h2>

    <p class="description">
      The "Component Library" makes front-end web development in AngularJS2
      faster and easier. It makes the task of developing forms in AngularJS2
      much easier and straight forward.
    </p>`;
  }
}
