import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D20SharedService {
  constructor() {}

  getParsedInput(rawInput: string) {
    const sections = rawInput.split('\n\n');

    return null;
  }
}
