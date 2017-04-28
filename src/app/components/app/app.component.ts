import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'component library';
  public company = 'pulse systems inc.';

  constructor() { }

  public ngOnInit() { }
}
