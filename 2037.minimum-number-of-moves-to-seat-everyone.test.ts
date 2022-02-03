import { minMovesToSeat } from './2037.minimum-number-of-moves-to-seat-everyone';

test('0', () => {
  expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4);
});

test('1', () => {
  expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
});

test('2', () => {
  expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
});
