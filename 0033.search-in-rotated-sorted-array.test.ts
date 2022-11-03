import search from './0033.search-in-rotated-sorted-array';

test('33. Search in Rotated Sorted Array', () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  expect(search([1], 0)).toBe(-1);
  expect(search([1, 3], 1)).toBe(0);
  expect(search([3, 1], 1)).toBe(1);
  expect(search([1, 3, 5], 3)).toBe(1);
  expect(search([7, 8, 1, 2, 3, 4, 5, 6], 2)).toBe(3);
  expect(search([8, 9, 2, 3, 4], 9)).toBe(1);
  expect(search([4, 5, 6, 7, 8, 1, 2, 3], 8)).toBe(4);
  expect(search([5, 1, 3], 1)).toBe(1);
});
