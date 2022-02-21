import { sumBase } from './1837.sum-of-digits-in-base-k';

test('1', () => {
  expect(sumBase(34, 6)).toBe(9);
});

test('2', () => {
  expect(sumBase(10, 10)).toBe(1);
});
