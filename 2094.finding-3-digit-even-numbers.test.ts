import { findEvenNumbers } from './2094.finding-3-digit-even-numbers';

test('0', () => {
  expect(findEvenNumbers([2, 1, 3, 0])).toEqual([
    102, 120, 130, 132, 210, 230, 302, 310, 312, 320,
  ]);
  expect(findEvenNumbers([2, 1, 3, 0]).length).toBe(10);
});

test('1', () => {
  expect(findEvenNumbers([2, 2, 8, 8, 2])).toEqual([
    222, 228, 282, 288, 822, 828, 882,
  ]);
  expect(findEvenNumbers([2, 2, 8, 8, 2]).length).toBe(7);
});

test('2', () => {
  expect(findEvenNumbers([3, 7, 5])).toEqual([]);
  expect(findEvenNumbers([3, 7, 5]).length).toBe(0);
});

test('3', () => {
  expect(findEvenNumbers([3, 3, 8, 4])).toEqual([334, 338, 348, 384, 438, 834]);
  expect(findEvenNumbers([3, 3, 8, 4]).length).toBe(6);
});
