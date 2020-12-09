import { Component, OnInit } from '@angular/core';
import { D10InputService } from '../day10/d10-input.service';
import { D10P01Service } from '../day10/d10-p01.service';
import { D10P02Service } from '../day10/d10-p02.service';

@Component({
  selector: 'app-day11',
  templateUrl: './day11.component.html',
  styleUrls: ['./day11.component.css'],
})
export class Day11Component implements OnInit {
  part01ResultStr: string;
  part02ResultStr: string;

  constructor(
    private inputService: D10InputService,
    private part01Service: D10P01Service,
    private part02Service: D10P02Service
  ) {}

  ngOnInit(): void {
    const rawInput = this.inputService.getRawInput();

    const part01Result = this.part01Service.getResult(rawInput);
    this.part01ResultStr =
      part01Result.result +
      '\n' +
      part01Result.calculationTime +
      ' miliseconds';

    const part02Result = this.part02Service.getResult(rawInput);
    this.part02ResultStr =
      part02Result.result +
      '\n' +
      part02Result.calculationTime +
      ' miliseconds';
  }
}
