import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextScrambler]'
})
export class TextScramblerDirective implements OnInit {
  letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //randomizer pool

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
      this.triggerTransformation(this.el.nativeElement);
  }

  triggerTransformation(event: HTMLElement): void {
    let iterations = 0;
    let tempText = event.textContent.split("");
    setInterval(() => {
      event.textContent = event.textContent
      .split("")
      .map((letter,index) => { 
        if (index < iterations) {
          return tempText[index]
        }
          return this.letters[Math.floor(Math.random() * 26)]
        })
      .join("");

      iterations += 1 / 0.5; 
    }, 20)
  }
}
