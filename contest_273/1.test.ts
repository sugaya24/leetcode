import { isSameAfterReversals } from './1';

test('0', () => {
  expect(isSameAfterReversals(526)).toBe(true);
});
test('1', () => {
  expect(isSameAfterReversals(1800)).toBe(false);
});
test('2', () => {
  expect(isSameAfterReversals(0)).toBe(true);
});
