import { Console, Random } from '@woowacourse/mission-utils';
import { Input } from './Input';

class App {
  async run() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const carNames = Input.getCarNames(carNamesInput);

    const trialNumberInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const trialNumber = Input.getTrialNumber(trialNumberInput);

    // 자동차 이름에 따른 이동 현황을 편리하게 관리하기 위해 Map 사용

    function initCarMoves(carNames) {
      const carMoves = new Map();

      for (const carName of carNames) {
        carMoves.set(carName, 0);
      }
      return carMoves;
    }

    const carMoves = initCarMoves(carNames);

    const ROLL_DICE_FROM = 0;
    const ROLL_DICE_TO = 9;

    // 게임을 한 사이클 플레이한 후 carMoves 업데이트

    function play(carMoves, trialNumber, rollDiceFrom, rollDiceTo) {
      Console.print('\n실행 결과');

      function moveCar(carMoves, carName) {
        carMoves.set(carName, carMoves.get(carName) + 1);
      }

      function playOneTurn(carMoves, carName) {
        const randomNumber = Random.pickNumberInRange(rollDiceFrom, rollDiceTo);

        if (randomNumber >= 4) {
          moveCar(carMoves, carName);
        }
        printCarMove(carMoves, carName);
      }

      function printCarMove(carMoves, carName) {
        Console.print(`${carName} : ${'-'.repeat(carMoves.get(carName))}`);
      }

      for (let i = 0; i < trialNumber; i++) {
        for (const carName of carMoves.keys()) {
          playOneTurn(carMoves, carName);
        }
        Console.print('');
      }
    }

    play(carMoves, trialNumber, ROLL_DICE_FROM, ROLL_DICE_TO);

    const biggestMove = Math.max(...carMoves.values());

    const winners = [];
    for (const carName of carMoves.keys()) {
      if (carMoves.get(carName) === biggestMove) {
        winners.push(carName);
      }
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
