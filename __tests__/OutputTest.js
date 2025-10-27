import { Output } from '../src/Output.js';

describe('출력 문자열 생성', () => {
  test('로그를 받아 형식에 맞는 문자열을 생성한다.', () => {
    const movementLogs = ['pobi : -', 'woni : ', 'han : -'];
    const playerNumber = 3;

    const formattedString = Output.formatMovementLogs(
      movementLogs,
      playerNumber
    );

    const expectedString = ['', 'pobi : -', 'woni : ', 'han : -', ''].join(
      '\n'
    );
    expect(formattedString).toEqual(expectedString);
  });
});
