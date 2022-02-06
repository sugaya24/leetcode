import { maxProduct } from './1464.maximum-product-of-two-elements-in-an-array';

test('0', () => {
  expect(maxProduct([3, 4, 5, 2])).toBe(12);
});
test('', () => {
  expect(maxProduct([1, 5, 4, 5])).toBe(16);
});
test('0', () => {
  expect(maxProduct([3, 7])).toBe(12);
});
