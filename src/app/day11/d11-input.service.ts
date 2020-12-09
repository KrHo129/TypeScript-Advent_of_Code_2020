import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D11InputService {
  inputStr = ``;

  constructor() {}

  getRawInput(): string {
    return this.inputStr;
  }
}
