import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D20SharedService } from './d20-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D20P02Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D20SharedService
  ) {}

  getResult(rawInput: string): { result: string; calculationTime: number } {
    this.timerService.startTimer();

    const input = this.sharedService.getParsedInput(rawInput);

    const calculationTime = this.timerService.getTime();
    return {
      result: 'null'.toString(),
      calculationTime: calculationTime,
    };
  }
}
