import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D14SharedService } from './d14-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D14P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D14SharedService
  ) {}

  getResult(rawInput: string): { result: string; calculationTime: number } {
    this.timerService.startTimer();

    const input = this.sharedService.getParsedInput(rawInput);

    const result = null;

    const calculationTime = this.timerService.getTime();
    return {
      result: result.toString(),
      calculationTime: calculationTime,
    };
  }
}
