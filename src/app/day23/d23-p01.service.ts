import { Injectable } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { D23SharedService } from './d23-shared.service';

@Injectable({
  providedIn: 'root',
})
export class D23P01Service {
  constructor(
    private timerService: TimerService,
    private sharedService: D23SharedService
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
