import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    async function getUserInput() {
      const carNamesInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );

      const carNames = carNamesInput
        .split(',')
        .map((carName) => carName.trim());

      function validateCarNames(carNames) {
        for (const carName of carNames) {
          if (carName.length > 5) {
            throw new Error(
              `[Error] car name should be less or equal than 5 : ${carName}`
            );
          }
        }
      }

      validateCarNames(carNames);

      const trialNumberInput = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      const trialNumber = trialNumberInput.trim();

      function validateTrialNumber(trialNumber) {
        if (Number.isNaN(trialNumber)) {
          throw new Error(
            `[Error] trial number should be a number. : ${trialNumber}`
          );
        }
      }

      validateTrialNumber(trialNumber);
      return [carNames, trialNumber];
    }

    const [carNames, trialNumber] = await getUserInput();

    // 자동차 이름에 따른 이동 현황을 편리하게 관리하기 위해 Map 사용
    const carMoves = new Map();
    for (const carName of carNames) {
      carMoves.set(carName, 0);
    }

    const RANDOM_RANGE_FROM = 0;
    const RANDOM_RANGE_TO = 9;

    for (let i = 0; i < trialNumber; i++) {
      console.log('trial: ' + (i + 1));

      for (const carName of carMoves.keys()) {
        // roll
        const randomNumber = Random.pickNumberInRange(
          RANDOM_RANGE_FROM,
          RANDOM_RANGE_TO
        );

        if (randomNumber >= 4) {
          carMoves.set(carName, carMoves.get(carName) + 1);
          console.log(`${carName} goes forward : ${randomNumber}`);
        }
      }
    }

    const biggestMove = Math.max(...carMoves.values());

    console.log('biggestMove: ' + biggestMove);
    const winners = [];
    for (const carName of carMoves.keys()) {
      if (carMoves.get(carName) === biggestMove) {
        winners.push(carName);
      }
    }

    console.log('winners: ' + winners);
  }
}

export default App;
