<p align="center">
 <img width="20%" height="20%" src="https://raw.githubusercontent.com/seba174/ngx-loading-buttons/main/logo.png">
</p>

<br />

![npm](https://img.shields.io/npm/dt/@seba174/ngx-loading-buttons)
![npm](https://img.shields.io/npm/dm/@seba174/ngx-loading-buttons)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40seba174%2Fngx-loading-buttons)](https://bundlephobia.com/package/@seba174/ngx-loading-buttons)
[![CI](https://github.com/seba174/ngx-loading-buttons/actions/workflows/main.yml/badge.svg)](https://github.com/seba174/ngx-loading-buttons/actions/workflows/main.yml)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/l/@seba174/ngx-loading-buttons.svg?maxAge=2592000)](https://github.com/seba174/ngx-loading-buttons/blob/main/LICENSE)


A lightweight Angular library to add a loading spinner to your [Angular Material](https://material.angular.io) buttons. 

> This package is a maintained fork of the original `ngx-loading-buttons` project, published as `@seba174/ngx-loading-buttons` for current Angular releases.

<img src="https://raw.githubusercontent.com/seba174/ngx-loading-buttons/main/example.gif">


### Installation

```
ng add @seba174/ngx-loading-buttons
```

## Usage

Import the standalone directives you use directly.

```ts
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBasicSpinnerDirective,
  MatGlowDirective,
} from '@seba174/ngx-loading-buttons';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBasicSpinnerDirective,
    MatGlowDirective,
  ],
  template: `
    <button mat-raised-button [mtBasicSpinner]="saving()" [hideText]="true" (click)="save()">Save</button>
    <button mat-button [mtGlow]="saving()" glowColor="blue" (click)="save()">Save</button>
  `,
})
export class SaveButtonComponent {
  saving = signal(false);

  save(): void {
    this.saving.set(true);
    // Run your async save operation here.
  }
}
```

Use `mtBasicSpinner` for the spinner state.

```html
<button mat-raised-button [mtBasicSpinner]="saving()">Basic</button>
```

You can also hide the button's text like this.

```html
<button mat-raised-button [mtBasicSpinner]="true" [hideText]="true">Basic</button>
```

Use `mtGlow` for the glow loading state.

```html
<button mat-raised-button [mtGlow]="saving()" glowColor="blue">Basic</button>
```

Add the package styles to your global styles.

```scss
@import '@seba174/ngx-loading-buttons/styles';
```

## Issues

Found a bug or want to request a feature?

Open an issue [here](https://github.com/seba174/ngx-loading-buttons/issues).

## Credits
- <a href="https://www.flaticon.com/free-icons/fidget-spinner" title="fidget-spinner icons">Fidget-spinner icons created by Smashicons - Flaticon</a>
