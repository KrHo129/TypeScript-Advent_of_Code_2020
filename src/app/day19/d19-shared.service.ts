import { Injectable } from '@angular/core';

export interface Rules {
  [s: string]: [string[]];
}

@Injectable({
  providedIn: 'root',
})
export class D19SharedService {
  constructor() {}

  getParsedInput(rawInput: string): { messages: string[]; rules: Rules } {
    const sections = rawInput.split('\n\n');

    const messages = sections[1].split('\n');

    const rules = {};

    for (let line of sections[0].split('\n')) {
      const splittedLine = line.split(': ');
      const key = splittedLine[0];

      const ruleArr = splittedLine[1].split(' | ');
      let parsedRule = [];

      for (let rule of ruleArr) {
        const singleRule = rule.split(' ');
        parsedRule.push(singleRule);
      }
      rules[key] = parsedRule;
    }

    return {
      messages: messages,
      rules: rules,
    };
  }

  // getParsedInputPart2(rawInput: string): { messages: string[]; rules: Rules } {
  //   const sections = rawInput.split('\n\n');

  //   const messages = sections[1].split('\n');

  //   const rules = {};

  //   for (let line of sections[0].split('\n')) {
  //     const splittedLine = line.split(': ');
  //     const key = splittedLine[0];

  //     let ruleStr = splittedLine[1];
  //     if (key === '8') {
  //       ruleStr = '42 | 42 8';
  //     } else if (key === '11') {
  //       ruleStr = '42 31 | 42 11 31';
  //     }

  //     const ruleArr = ruleStr.split(' | ');
  //     let parsedRule = [];

  //     for (let rule of ruleArr) {
  //       const singleRule = rule.split(' ');
  //       parsedRule.push(singleRule);
  //     }
  //     rules[key] = parsedRule;
  //   }

  //   return {
  //     messages: messages,
  //     rules: rules,
  //   };
  // }
}
