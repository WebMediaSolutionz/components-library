import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

import { AppComponent } from './components/app/app.component';
import { FormFieldComponent } from './shared/components/form-field/form-field.component';
import { ErrorPromptComponent } from './shared/components/error-prompt/error-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    FormFieldComponent,
    ErrorPromptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
