import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBasicSpinnerDirective } from './mat-basic-spinner.directive';

@Component({
  template: `
    <button id="spinnerWithText" [mtBasicSpinner]="saving()">Button</button>
    <button id="spinnerWithoutText" [mtBasicSpinner]="saving()" [hideText]="true">Basic</button>
  `,
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
})
class TestHostComponent {
  saving = signal(false);
}

describe('MatBasicSpinnerDirective', () => {

  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        MatBasicSpinnerDirective
      ],
      declarations: [TestHostComponent]
    })
    .createComponent(TestHostComponent);

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const element: HTMLButtonElement = fixture.nativeElement.querySelector("#spinnerWithText");
    expect(element).toBeTruthy();
  });

  it('should show spinner and text when loading is true', () => {
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    const element: HTMLButtonElement = fixture.nativeElement.querySelector("#spinnerWithText");
    expect(element.classList).toContain("mat-spinner");
    expect(element.disabled).toEqual(true);
  });

  it('should show spinner and hide text when loading is true', () => {
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    const element: HTMLButtonElement = fixture.nativeElement.querySelector("#spinnerWithoutText");
    expect(element.className).toContain("mat-spinner");
    expect(element.disabled).toEqual(true);
    expect(element.className).toContain("hide-btn-text");
  });

});
