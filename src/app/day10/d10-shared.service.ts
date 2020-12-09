import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D10SharedService {
  constructor() {}

  getParsedInput(rawInput: string) {
    const splittedLines = rawInput.split('\n');


    return splittedLines;
  }
}
