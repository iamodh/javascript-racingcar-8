export class Input {
  constructor() {}

  static getCarNames(input) {
    const carNames = input.split(',').map((carName) => carName.trim());

    Input.#validateCarNames(carNames);
    // this.#validateCarNames(carNames)
    return carNames;
  }

  static getTrialNumber(input) {
    const trialNumber = input.trim();

    Input.#validateTrialNumber(trialNumber);

    return trialNumber;
  }

  static #validateCarNames(carNames) {
    for (const carName of carNames) {
      if (carName.length > 5) {
        throw new Error(
          `[ERROR] car name should be less or equal than 5 : ${carName}`
        );
      }
    }
  }

  static #validateTrialNumber(trialNumber) {
    if (Number.isNaN(trialNumber)) {
      throw new Error(
        `[ERROR] trial number should be a number. : ${trialNumber}`
      );
    }
  }
}
