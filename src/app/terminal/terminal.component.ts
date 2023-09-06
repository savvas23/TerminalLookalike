import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {

  public commandLogs: string[] = [];
  public commands: string[] = ['help','cv','linkedin','whoami'];

  newCommand(event): void {
    this.commandLogs.push(event);
  }

}