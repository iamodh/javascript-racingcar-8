import { Car } from '../src/Car';

describe('자동차 기능 테스트', () => {
  test('4 미만의 값을 받았을 때 이동하지 않음', () => {
    const carName = 'pobi';
    const value = 1;

    const car = new Car(carName);
    car.checkAndMove(value);
    const position = car.getPosition();

    expect(position).toBe(0);
  });

  test('4 이상의 값을 받았을 때 이동', () => {
    const carName = 'pobi';
    const value = 4;

    const car = new Car(carName);
    car.checkAndMove(value);
    const position = car.getPosition();

    expect(position).toBe(1);
  });
});
