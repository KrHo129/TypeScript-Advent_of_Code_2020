import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D24InputService {
  inputStr = ``;

  testInput = ``;

  constructor() {}

  getRawInput(): string {
    return this.inputStr;
    // return this.testInput;
  }
}
