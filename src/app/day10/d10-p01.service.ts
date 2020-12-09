import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D10SharedService } from './d10-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D10P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D10SharedService
  ) {}

  getResult(rawInput: string): { result: string; calculationTime: number } {
    this.timerService.startTimer();

    const data = this.sharedService.getParsedInput(rawInput);


    const calculationTime = this.timerService.getTime();
    return {
      result: null,
      calculationTime: calculationTime,
    };
  }
}
