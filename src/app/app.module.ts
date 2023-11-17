import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { CommandComponent } from './command/command.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './response/help/help.component';
import { CVComponent } from './response/cv/cv.component';
import { LinkedinComponent } from './response/linkedin/linkedin.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { AboutMeComponent } from './response/aboutme/aboutme.component';
import { TextScramblerDirective } from './directives/text-scrambler.directive';
import { GithubResponseComponent } from './response/github/github-response/github-response.component';
import { WebsiteComponent } from './response/website/website.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    CommandComponent,
    HelpComponent,
    CVComponent,
    LinkedinComponent,
    AutofocusDirective,
    TextScramblerDirective,
    AboutMeComponent,
    GithubResponseComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
