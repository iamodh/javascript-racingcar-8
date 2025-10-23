import { Console, Random } from '@woowacourse/mission-utils';
import { Input } from './Input';
import { Game } from './Game';

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

    const game = new Game(carNames, trialNumber);
    const winners = game.play();

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
