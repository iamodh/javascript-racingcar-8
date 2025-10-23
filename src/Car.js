import { Console } from '@woowacourse/mission-utils';

export class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  checkAndMove(randomNumber) {
    if (randomNumber >= 4) {
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }
  getPosition() {
    return this.#position;
  }

  printNameAndPosition() {
    Console.print(`${this.#name} : ${'-'.repeat(this.#position)}`);
  }
}
