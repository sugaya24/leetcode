import { minOperations } from './1827.minimum-operations-to-make-the-array-increasing';

test('0', () => {
  expect(minOperations([1, 1, 1])).toBe(3);
});

test('1', () => {
  expect(minOperations([1, 5, 2, 4, 1])).toBe(14);
});

test('2', () => {
  expect(minOperations([8])).toBe(0);
});
