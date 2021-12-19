import { getDescentPeriods } from './3';

test('0', () => {
  expect(getDescentPeriods([3, 2, 1, 4])).toBe(7);
});
test('1', () => {
  expect(getDescentPeriods([8, 6, 7, 7])).toBe(4);
});
test('2', () => {
  expect(getDescentPeriods([1])).toBe(1);
});
test('3', () => {
  expect(getDescentPeriods([4, 3, 2, 1])).toBe(10);
});
test('4', () => {
  expect(getDescentPeriods([4, 3, 2, 5, 2, 1])).toBe(10);
});
