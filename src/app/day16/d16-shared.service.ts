import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D16SharedService {
  constructor() {}

  getParsedInput(rawInput: string) {
    const lines = rawInput.split('\n');

    return lines;
  }
}
