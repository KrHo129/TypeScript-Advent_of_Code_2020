import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D24SharedService } from './d24-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D24P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D24SharedService
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
