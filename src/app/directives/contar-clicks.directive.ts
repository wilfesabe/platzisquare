import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  constructor() { }

  @HostListener('click', ['$event.target']) onClick(btn){
    console.log('a', btn, "Numkero de clicks: ", this.clickN++);
    this.opacity += .1;
  }

  @HostBinding('style.opacity') opacity: number = .1;
}
