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

    return Number(trialNumber);
  }

  static #validateCarNames(carNames) {
    for (const carName of carNames) {
      if (carName.length === 0) {
        throw new Error('[ERROR] car name should not be empty.');
      }
      if (carName.length > 5) {
        throw new Error(
          `[ERROR] car name should be less or equal than 5. : ${carName}`
        );
      }
    }
  }

  static #validateTrialNumber(trialNumber) {
    const regExp = /^[0-9]+$/;
    if (!regExp.test(trialNumber))
      throw new Error(
        `[ERROR] trial number should be a number. : ${trialNumber}`
      );

    const num = Number(trialNumber);

    if (num <= 0) {
      throw new Error(
        `[ERROR] trial number should be a positive integer. : ${trialNumber}`
      );
    }

    if (Number(trialNumber) > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        `[ERROR] trial number should be less than Number.MAX_SAFE_INTEGER. : ${trialNumber}`
      );
    }
  }
}
