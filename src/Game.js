import { Console, Random } from '@woowacourse/mission-utils';

export class Game {
  static #ROLL_DICE_FROM = 0;
  static #ROLL_DICE_TO = 9;

  // 자동차 이름에 따른 이동 현황을 편리하게 관리하기 위해 Map 사용
  #carMoves = new Map();
  #trialNumber;

  constructor(carNames, trialNumber) {
    this.#initCarMoves(carNames);
    this.#trialNumber = trialNumber;
  }

  #initCarMoves(carNames) {
    for (const carName of carNames) {
      this.#carMoves.set(carName, 0);
    }
  }

  play() {
    for (let i = 0; i < this.#trialNumber; i++) {
      for (const carName of this.#carMoves.keys()) {
        this.#playOneTurn(carName);
      }
      Console.print('');
    }

    const winners = this.#calculateWinners();

    return winners;
  }

  #playOneTurn(carName) {
    const randomNumber = Random.pickNumberInRange(
      Game.#ROLL_DICE_FROM,
      Game.#ROLL_DICE_TO
    );

    if (randomNumber >= 4) {
      this.#moveCar(carName);
    }
    this.#printCarMove(carName);
  }

  #moveCar(carName) {
    this.#carMoves.set(carName, this.#carMoves.get(carName) + 1);
  }

  #printCarMove(carName) {
    Console.print(`${carName} : ${'-'.repeat(this.#carMoves.get(carName))}`);
  }

  #calculateWinners() {
    const biggestMove = Math.max(...this.#carMoves.values());
    const winners = [];
    for (const carName of this.#carMoves.keys()) {
      if (this.#carMoves.get(carName) === biggestMove) {
        winners.push(carName);
      }
    }

    return winners;
  }
}
