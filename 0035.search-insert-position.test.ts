import { searchInsert } from './0035.search-insert-position';

test('0', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('1', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('2', () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});
