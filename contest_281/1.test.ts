import { countEven } from './1';

test('1', () => {
  expect(countEven(4)).toBe(2);
});
test('2', () => {
  expect(countEven(30)).toBe(14);
});
test('3', () => {
  expect(countEven(1)).toBe(0);
});
