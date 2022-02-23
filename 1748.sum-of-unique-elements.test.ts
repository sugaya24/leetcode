import { sumOfUnique } from './1748.sum-of-unique-elements';

test('1', () => {
  expect(sumOfUnique([1, 2, 3, 2])).toBe(4);
});

test('2', () => {
  expect(sumOfUnique([1, 1, 1, 1, 1])).toBe(0);
});

test('3', () => {
  expect(sumOfUnique([1, 2, 3, 4, 5])).toBe(15);
});
