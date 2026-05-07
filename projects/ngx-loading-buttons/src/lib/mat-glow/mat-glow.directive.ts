import { Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[mtGlow]',
  standalone: true,
  host: {
    '[class.mat-glow]': 'mtGlow()',
    '[class.hide-btn-text]': 'hideText() && mtGlow()',
  },
})
export class MatGlowDirective {
  readonly glowColor = input('blue');
  readonly mtGlow = input(false);
  readonly hideText = input(false);

  constructor(elem: ElementRef<HTMLButtonElement>) {
    effect(() => {
      document.documentElement.style.setProperty('--glow-color', this.glowColor());
    });
    effect(() => {
      elem.nativeElement.disabled = this.mtGlow();
    });
  }
}
