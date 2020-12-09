import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D11SharedService } from './d11-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D11P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D11SharedService
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
