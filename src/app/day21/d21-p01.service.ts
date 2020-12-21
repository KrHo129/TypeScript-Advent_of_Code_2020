import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D21SharedService } from './d21-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D21P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D21SharedService
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
