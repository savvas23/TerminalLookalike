import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  { path: '', component: TerminalComponent},
  { path: 'homepage', component: HomepageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
