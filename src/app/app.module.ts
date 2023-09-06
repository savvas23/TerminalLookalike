import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { CommandComponent } from './command/command.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './response/help/help.component';
import { CVComponent } from './response/cv/cv.component';
import { LinkedinComponent } from './response/linkedin/linkedin.component';
import { AutofocusDirective } from './command/autofocus.directive';
import { AboutMeComponent } from './response/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    CommandComponent,
    HelpComponent,
    CVComponent,
    LinkedinComponent,
    AutofocusDirective,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
