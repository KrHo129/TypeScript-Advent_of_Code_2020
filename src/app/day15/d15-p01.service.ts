import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D15SharedService } from './d15-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D15P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D15SharedService
  ) {}

  getResult(rawInput: string): { result: string; calculationTime: number } {
    this.timerService.startTimer();

    const input = this.sharedService.getParsedInput(rawInput);

    const calculationTime = this.timerService.getTime();
    return {
      result: 'sum'.toString(),
      calculationTime: calculationTime,
    };
  }
}
