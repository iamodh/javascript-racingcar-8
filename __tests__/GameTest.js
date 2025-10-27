import { Game } from '../src/Game';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('게임 실행', () => {
  test('올바른 우승자와 로그를 리턴하는가?', () => {
    const carNames = ['pobi', 'woni', 'han'];
    const trialNumber = 1;

    const MOVING_FORWARD = 4;
    const STOP = 3;

    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    const game = new Game(carNames, trialNumber);
    const { winners, logs } = game.play();

    expect(winners).toEqual(['pobi', 'han']);
    expect(logs).toEqual(['pobi : -', 'woni : ', 'han : -']);
  });
});
