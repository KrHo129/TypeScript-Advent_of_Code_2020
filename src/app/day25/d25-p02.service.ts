import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D25SharedService } from './d25-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D25P02Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D25SharedService
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
