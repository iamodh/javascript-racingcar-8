import { Input } from '../src/Input';

/* To do
 * - 입력 크기 초과 테스트 작성
 * - test.each 사용, 파라미터화
 */

describe('자동차 이름 배열 생성', () => {
  test('자동차 이름에 대한 문자열을 받아 배열을 반환한다.', () => {
    const input = 'pobi,woni';

    const carNames = Input.getCarNames(input);

    expect(carNames).toEqual(['pobi', 'woni']);
  });

  test.each([
    { input: 'pobi,javaji', errorName: '5글자 초과인 자동차 이름' },
    { input: 'pobi, ', errorName: '빈 문자열 또는 공백의 자동차 이름' },
  ])('예외 테스트: $errorName', ({ input }) => {
    const action = () => Input.getCarNames(input);
    expect(action).toThrow('[ERROR]');
  });
});

describe('시도 횟수 생성', () => {
  test('시도 횟수에 대한 문자를 받아 숫자를 반환한다.', () => {
    const input = '1';

    const trialNumber = Input.getTrialNumber(input);

    expect(trialNumber).toEqual(1);
  });

  test.each([
    { input: 'char', errorName: '숫자로 변환할 수 없는 문자 입력' },
    { input: ' ', errorName: '공백 입력' },
    { input: '-1', errorName: '음수 입력' },
    { input: '0', errorName: '0 입력' },
  ])('예외 테스트: $errorName', ({ input }) => {
    const action = () => Input.getTrialNumber(input);

    expect(action).toThrow('[ERROR]');
  });

  //   test('예외 테스트: 너무 큰 숫자 입력');
});
