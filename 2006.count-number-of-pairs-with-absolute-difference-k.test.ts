import { countKDifference } from './2006.count-number-of-pairs-with-absolute-difference-k';

test('0', () => {
  expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
});
test('1', () => {
  expect(countKDifference([1, 3], 3)).toBe(0);
});
test('2', () => {
  expect(countKDifference([3, 2, 1, 5, 4], 2)).toBe(3);
});
