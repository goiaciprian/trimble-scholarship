import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTemaCursDirective]',
})
export class TemaCursDirectiveDirective {
  private defaultStyle = {};

  // @Input('appTemaCursDirective') runDirective: boolean = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.defaultStyle = { ...this.elRef.nativeElement.style };
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (true) {
      this.elRef.nativeElement.style.backgroundColor = 'red';
      this.elRef.nativeElement.style.fontSize = '30px';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style = { ...this.defaultStyle };
  }
}
