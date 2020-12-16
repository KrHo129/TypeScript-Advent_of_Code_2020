import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D15SharedService {
  constructor() {}

  getParsedInput(rawInput: string) {
    const lines = rawInput.split('\n');

    return lines;
  }
}
