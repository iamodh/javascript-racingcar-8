export class Input {
  static MAX_CAR_NUMBER = 10;
  static MAX_TRIAL_NUMBER = 1000;

  constructor() {}

  static getCarNames(input) {
    const carNames = input.split(',').map((carName) => carName.trim());

    Input.#validateCarNames(carNames);
    return carNames;
  }

  static getTrialNumber(input) {
    const trialNumber = input.trim();

    Input.#validateTrialNumber(trialNumber);

    return Number(trialNumber);
  }

  static #validateCarNames(carNames) {
    if (carNames.length > Input.MAX_CAR_NUMBER) {
      throw new Error('[ERROR] too mamy cars.');
    }

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

    if (Number(trialNumber) > Input.MAX_TRIAL_NUMBER) {
      throw new Error(
        `[ERROR] trial number should be less than 1000. : ${trialNumber}`
      );
    }
  }
}
