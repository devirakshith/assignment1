import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangebackgroundcolor]'
})
export class ChangebackgroundcolorDirective {
  hoverColor = 'blue';

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
     this.changeBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
     this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color: string) {
     this.elRef.nativeElement.style.backgroundColor = color;
  }
}
