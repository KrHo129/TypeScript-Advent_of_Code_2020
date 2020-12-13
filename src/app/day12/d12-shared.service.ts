import { Injectable } from '@angular/core';

export class Boat {
  x = 0;
  y = 0;
  direction = 'E';

  executeCommand(command: { direction: string; value: number }) {
    if (command.direction === 'L' || command.direction === 'R') {
      this.changeDirection(command.direction, command.value);
    } else {
      this.moveShip(command.direction, command.value);
    }
  }

  changeDirection(direction: string, value: number) {
    const skyDirections = ['E', 'S', 'W', 'N'];
    const currentDirectionIndex = skyDirections.indexOf(this.direction);

    const steps = value / 90;

    let newDirectionIndex;
    if (direction === 'R') {
      newDirectionIndex = (currentDirectionIndex + steps) % 4;
    } else if (direction === 'L') {
      newDirectionIndex = (currentDirectionIndex - steps) % 4;
      if (newDirectionIndex < 0) {
        newDirectionIndex += 4;
      }
    } else {
      console.error('Wrong direction!!!');
    }
    this.direction = skyDirections[newDirectionIndex];
  }

  moveShip(direction: string, value: number) {
    let moveDirection;
    if (direction === 'F') {
      moveDirection = this.direction;
    } else {
      moveDirection = direction;
    }

    switch (moveDirection) {
      case 'N':
        this.x += value;
        break;
      case 'S':
        this.x -= value;
        break;
      case 'E':
        this.y += value;
        break;
      case 'W':
        this.y -= value;
        break;

      default:
        console.error(moveDirection, 'Wrong direction');
        break;
    }
  }

  getManhattanDistance() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
}

@Injectable({
  providedIn: 'root',
})
export class D12SharedService {
  constructor() {}

  getParsedInput(rawInput: string): { direction: string; value: number }[] {
    const splittedLines = rawInput.split('\n');

    const directions = [];

    for (let line of splittedLines) {
      const direction = line[0];
      const value = parseInt(line.substr(1));
      directions.push({ direction: direction, value: value });
    }

    return directions;
  }
}
