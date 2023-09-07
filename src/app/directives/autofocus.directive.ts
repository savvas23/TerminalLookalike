import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit {
  @Input() public autoFocus: boolean;

  constructor(private ref: ElementRef) { }

  ngAfterContentInit(): void {
    this.ref.nativeElement.focus();
  }
}
