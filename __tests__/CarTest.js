import { Car } from '../src/Car';

describe('자동차 기능', () => {
  test.each([
    { carName: 'pobi', value: 1, movedPosition: 0 },
    { carName: 'pobi', value: 4, movedPosition: 1 },
  ])(
    '$carName 자동차가 $value를 받았을 때 $movedPosition만큼 이동',
    ({ carName, value, movedPosition }) => {
      const car = new Car(carName);
      car.checkAndMove(value);
      const position = car.getPosition();

      expect(position).toBe(movedPosition);
    }
  );
});
