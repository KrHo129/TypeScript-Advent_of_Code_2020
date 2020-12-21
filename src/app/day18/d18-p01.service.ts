import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D18SharedService } from './d18-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D18P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D18SharedService
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
