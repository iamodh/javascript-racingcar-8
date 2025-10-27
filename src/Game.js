import { Random } from '@woowacourse/mission-utils';
import { Car } from './Car.js';

export class Game {
  static #ROLL_DICE_FROM = 0;
  static #ROLL_DICE_TO = 9;

  #movementLogs = [];
  #cars = [];
  #trialNumber;

  constructor(carNames, trialNumber) {
    this.#initCars(carNames);
    this.#trialNumber = trialNumber;
  }

  #initCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  play() {
    for (let i = 0; i < this.#trialNumber; i++) {
      this.#playOneTurn();
    }

    const winners = this.#calculateWinners();

    return { winners, logs: this.#movementLogs };
  }

  #playOneTurn() {
    for (const car of this.#cars) {
      const randomNumber = Random.pickNumberInRange(
        Game.#ROLL_DICE_FROM,
        Game.#ROLL_DICE_TO
      );
      car.checkAndMove(randomNumber);
      const movementLog = car.createMovementLog();
      this.#movementLogs.push(movementLog);
    }
  }
  #calculateWinners() {
    const biggestMove = Math.max(...this.#cars.map((car) => car.getPosition()));

    const winners = this.#cars
      .filter((car) => car.getPosition() === biggestMove)
      .map((car) => car.getName());

    return winners;
  }
}
