import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

import { AppComponent } from './components/app/app.component';
import { FormFieldComponent } from './shared/components/form-field/form-field.component';
import { TextboxComponent } from './shared/components/textbox/textbox.component';
import { PasswordComponent } from './shared/components/password/password.component';
import { RadioComponent } from './shared/components/radio/radio.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { NumberComponent } from './shared/components/number/number.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { TextareaComponent } from './shared/components/textarea/textarea.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { SubmitComponent } from './shared/components/submit/submit.component';
import { RadioGroupComponent } from './shared/components/radio-group/radio-group.component';
import { CheckboxGroupComponent }
from './shared/components/checkbox-group/checkbox-group.component';
import { PromptComponent } from './shared/components/prompt/prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    FormFieldComponent,
    TextboxComponent,
    PasswordComponent,
    RadioComponent,
    CheckboxComponent,
    NumberComponent,
    DropdownComponent,
    TextareaComponent,
    ButtonComponent,
    SubmitComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
