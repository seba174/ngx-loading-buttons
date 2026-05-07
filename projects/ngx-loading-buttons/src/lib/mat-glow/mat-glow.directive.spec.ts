import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGlowDirective } from './mat-glow.directive';

@Component({
  template: `
    <button id="glowWithText" [mtGlow]="saving()" [glowColor]="color">Button</button>
    <button id="glowWithoutText" [mtGlow]="saving()" [hideText]="true" [glowColor]="color">Button</button>
  `,
  standalone: false,
})
class TestHostComponent {
  saving = signal(false);
  color = "blue";
}

describe('MatGlowDirective', () => {

  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        MatGlowDirective
      ],
      declarations: [TestHostComponent]
    })
    .createComponent(TestHostComponent);

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const element: HTMLElement = fixture.nativeElement.querySelector("#glowWithText");
    expect(element).toBeTruthy();
  });

  it('should show glow and text when loading is true', () => {
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    const element: HTMLButtonElement = fixture.nativeElement.querySelector("#glowWithText");
    expect(element.classList).toContain("mat-glow");
    expect(element.disabled).toEqual(true);
  });

  it('should show glow and hide text when loading is true', () => {
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    const element: HTMLButtonElement = fixture.nativeElement.querySelector("#glowWithoutText");
    expect(element.className).toContain("mat-glow");
    expect(element.className).toContain("hide-btn-text");
    expect(element.disabled).toEqual(true);
  });
});
