import { arrayPairSum } from './0561.array-partition-i';

test('1', () => {
  expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
});

test('2', () => {
  expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9);
});
