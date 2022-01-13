import { subsetXORSum } from './1863.sum-of-all-subset-xor-totals';

test('0', () => {
  expect(subsetXORSum([1, 3])).toBe(6);
});
test('1', () => {
  expect(subsetXORSum([5, 1, 6])).toBe(28);
});
test('2', () => {
  expect(subsetXORSum([3, 4, 5, 6, 7, 8])).toBe(480);
});
