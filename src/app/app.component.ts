import { Component } from '@angular/core';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private title: string = 'component library';
}
