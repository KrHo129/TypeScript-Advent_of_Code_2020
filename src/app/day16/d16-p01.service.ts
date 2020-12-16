import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D16SharedService } from './d16-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D16P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D16SharedService
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
