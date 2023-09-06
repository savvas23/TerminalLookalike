import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  public form: FormGroup;
  public isSubmitted: boolean = false;
  @Output() commandSubmitted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      command: this.fb.control(null)
    });  
  }

  submit(): void {
    this.form.get('command').disable();
    this.commandSubmitted.emit(this.form.get('command').value);
  }
}
