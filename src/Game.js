import { Console, Random } from '@woowacourse/mission-utils';
import { Car } from './Car';

export class Game {
  static #ROLL_DICE_FROM = 0;
  static #ROLL_DICE_TO = 9;

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
      Console.print('');
    }

    const winners = this.#calculateWinners();

    return winners;
  }

  #playOneTurn() {
    for (const car of this.#cars) {
      const randomNumber = Random.pickNumberInRange(
        Game.#ROLL_DICE_FROM,
        Game.#ROLL_DICE_TO
      );
      car.checkAndMove(randomNumber);
      this.#printCarNameAndPosition(car);
    }
  }

  #printCarNameAndPosition(car) {
    Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
  }

  #calculateWinners() {
    const biggestMove = Math.max(...this.#cars.map((car) => car.getPosition()));

    const winners = this.#cars
      .filter((car) => car.getPosition() === biggestMove)
      .map((car) => car.getName());

    return winners;
  }
}
