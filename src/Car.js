export class Car {
  #MOVE_DISTANCE = 1;
  #STANDARD_NUMBER_TO_MOVE = 4;

  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  checkAndMove(randomNumber) {
    if (randomNumber >= this.#STANDARD_NUMBER_TO_MOVE) {
      this.#position += this.#MOVE_DISTANCE;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  createMovementLog() {
    return `${this.#name} : ${'-'.repeat(this.#position)}`;
  }
}
